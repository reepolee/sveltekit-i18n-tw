import { locale } from 'svelte-i18n'
export const load = async (event) => {
    let lang = event.params.lang ?? event.data.lang ?? null;
    locale.set(lang);

    return {
        lang
    }
}