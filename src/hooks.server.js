import { sequence } from "@sveltejs/kit/hooks";
import { redirect } from '@sveltejs/kit';
import { _ } from 'svelte-i18n';
import { PUBLIC_DEFAULT_LOCALE } from '$env/static/public';
import './lib/i18n';
import { languages } from './lib/i18n';

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

export const handle_language = async ({ event, resolve }) => {
    if (event.params.lang) {
        // set a cookie for later
        event.cookies.set('lang', event.params.lang, { path: "/", expires: new Date(Date.now() + ONE_YEAR) })
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
        throw redirect(303, event.route.id.replace("[[lang=lang]]", lang) + event.url.search);
    }
    event.locals = { lang } // make it available to page.data

    return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) })
}

export const handle_my_hook = async ({ event, resolve }) => {
    // write your own if needed here
    let theme = event.cookies.get('theme') || '';
    return resolve(event, { transformPageChunk: ({ html }) => html.replace('%theme%', theme) })
};


export const handle = sequence(handle_language, handle_my_hook)
