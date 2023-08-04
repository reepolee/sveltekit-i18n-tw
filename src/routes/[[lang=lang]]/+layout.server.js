// import { locale } from 'svelte-i18n'
export const load = async (event) => {
    // locale.set(event.locals.lang)
    return {
        lang: event.locals.lang
    }
}