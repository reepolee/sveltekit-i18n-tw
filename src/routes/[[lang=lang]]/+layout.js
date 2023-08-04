import { locale } from 'svelte-i18n'
export const load = async (event) => {

    let lang = event.params.lang ?? event.data.lang ?? null;

    console.log('setting lang in layout to ', lang)
    locale.set(lang);

    return {
        lang
    }
}