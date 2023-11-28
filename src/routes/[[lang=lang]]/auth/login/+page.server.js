import { auth } from '$src/lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';

export const load = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) throw redirect(302, '/auth/profile');
    return {};
};

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');
        // basic check
        if (typeof username !== 'string' || username.length < 1 || username.length > 31) {
            return fail(400, {
                message: 'auth.login.invalid_username'
            });
        }
        if (typeof password !== 'string' || password.length < 1 || password.length > 255) {
            return fail(400, {
                message: 'auth.login.invalid_password'
            });
        }
        try {
            // find user by key
            // and validate password
            const key = await auth.useKey('username', username.toLowerCase(), password);
            const session = await auth.createSession({
                userId: key.userId,
                attributes: {}
            });
            locals.auth.setSession(session); // set session cookie
        } catch (e) {
            if (
                e instanceof LuciaError &&
                (e.message === 'AUTH_INVALID_KEY_ID' || e.message === 'AUTH_INVALID_PASSWORD')
            ) {
                // user does not exist
                // or invalid password
                return fail(400, {
                    message: 'auth.login.incorrect_username_or_password'
                });
            }
            return fail(500, {
                message: 'auth.login.unknown_error'
            });
        }
        // redirect to
        // make sure you don't throw inside a try/catch block!
        throw redirect(302, '/');
    }
};