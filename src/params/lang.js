import { languages } from "$lib/i18n"

export function match(param) {
    return languages.includes(param);
}