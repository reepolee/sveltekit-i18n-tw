import { auth } from '$src/lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';


export const load = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) throw redirect(302, '/auth/login');
    return {
        userId: session.user.userId,
        username: session.user.username
    };
};

export const actions = {
    logout: async ({ locals }) => {
        const session = await locals.auth.validate();
        if (!session) return fail(401);
        await auth.invalidateSession(session.sessionId); // invalidate session
        locals.auth.setSession(null); // remove cookie
        throw redirect(302, '/auth/login'); // redirect to login page
    }
};