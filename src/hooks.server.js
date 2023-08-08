import { redirect } from '@sveltejs/kit';
import { _ } from 'svelte-i18n';
import { PUBLIC_DEFAULT_LOCALE } from '$env/static/public';
import './lib/i18n';
import { languages } from './lib/i18n';

export const handle = async ({ event, resolve }) => {
    if (event.params.lang) {
        // set a cookie for later
        event.cookies.set('lang', event.params.lang, { path: "/" })
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
        event.cookies.set('lang', lang, { path: "/" })
    }

    if (!event.params.lang && event.route.id) {
        // route does not have a lang param, add one and redirect to it
        throw redirect(303, event.route.id.replace("[[lang=lang]]", lang) + event.url.search);
    }
    event.locals = { lang } // make it available to page.data

    return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) })
}