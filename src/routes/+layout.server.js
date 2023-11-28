export const load = async (event) => {
    return {
        theme: event.locals.theme,
        lang: event.locals.lang,
        user: event.locals?.user || {}
    }
}