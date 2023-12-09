import { PUBLIC_DEFAULT_LOCALE } from '$env/static/public';
import { auth } from "$src/lib/server/lucia";
import { redirect } from '@sveltejs/kit';
import { sequence } from "@sveltejs/kit/hooks";
import { _ } from 'svelte-i18n';
import './lib/i18n';
import { languages } from './lib/i18n';

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

export const handle_language = async ({ event, resolve }) => {
    if (event.params.lang) {
        // set a cookie for later
        event.cookies.set('lang', event.params.lang, { httpOnly: false, path: "/", expires: new Date(Date.now() + ONE_YEAR) })
    }

    let lang = event.cookies.get('lang');
    if (!lang) {
        // there is no selected language, assign one from browser or app default
        lang = event.request.headers.get('accept-language')?.split(',')[0].substring(0, 2) ?? '';
        if (!languages.includes(lang)) {
            // TODO we're just checking the first language in accept-language 
            lang = PUBLIC_DEFAULT_LOCALE;
        }

        // set for later
        event.cookies.set('lang', lang, { path: "/", expires: new Date(Date.now() + ONE_YEAR) })
    }

    if (!event.params.lang && event.route.id) {
        // route does not have a lang param, add one and redirect to it
        const { origin, pathname, search } = event.url;
        const redirect_to = `${origin}/${lang}${pathname}${search}`;
        throw redirect(303, redirect_to);
    }

    event.locals.lang = lang;  // make it available to page.data
    return await resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) });

}

export const handle_theme = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme') || '';
    event.locals.theme = theme; // make it available to page.data
    return await resolve(event, { transformPageChunk: ({ html }) => html.replace('%theme%', theme) });
};



export const handle_auth = async ({ event, resolve }) => {
    event.locals.auth = auth.handleRequest(event);
    const session = await event.locals.auth.validate();

    if (session) {
        event.locals.user = {
            userId: session.user.userId,
            username: session.user.username
        }
    }

    return await resolve(event);
};


export const handle_my_hook = async ({ event, resolve }) => {
    // write your own if needed here and add it to the end of sequence below
    return await resolve(event);
};


export const handle = sequence(handle_language, handle_theme, handle_auth)
