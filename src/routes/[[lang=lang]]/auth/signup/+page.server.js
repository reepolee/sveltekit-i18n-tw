import { auth } from '$src/lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { SqliteError } from 'better-sqlite3';

export const load = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) throw redirect(302, '/');
    return {};
};

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');

        // basic check
        if (typeof username !== 'string' || username.length < 4 || username.length > 31) {
            return fail(400, {
                message: 'Invalid username'
            });
        }
        if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
            return fail(400, {
                message: 'Invalid password'
            });
        }
        try {
            const user_record = {
                key: {
                    providerId: 'username', // auth method
                    providerUserId: username.toLowerCase(), // unique id when using "username" auth method
                    password // hashed by Lucia
                },
                attributes: {
                    username
                }
            };

            const user = await auth.createUser(user_record);
            const session = await auth.createSession({
                userId: user.userId,
                attributes: {}
            });
            locals.auth.setSession(session); // set session cookie
        } catch (e) {
            // check for unique constraint error in user table
            if (e instanceof SqliteError && e.code === 'SQLITE_CONSTRAINT_UNIQUE') {
                return fail(400, {
                    message: 'Username already taken'
                });
            }
            return fail(500, {
                message: 'An unknown error occurred'
            });
        }
        // redirect to
        // make sure you don't throw inside a try/catch block!
        throw redirect(302, '/');
    }
};