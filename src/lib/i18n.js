import { addMessages } from 'svelte-i18n';

const languages_from_folder = new Set();
const _language_names = new Map();
const imported_translations = import.meta.glob('../translations/**/*.json', {
	import: 'default',
});

for (const module in imported_translations) {
	const combined_lang = module.split('/')[2];
	const lang = combined_lang.includes('-') ? combined_lang.split('-')[1] : combined_lang;

	languages_from_folder.add(lang);
	imported_translations[module]().then((imported_module) => {
		languages_from_folder.add(lang);
		const segment = module.replaceAll('.json', '');
		const remove_part = "../translations/" + lang + "/";
		const _key = segment.replaceAll(remove_part, '').replaceAll('/', '.');

		const messages = {};
		messages[_key] = imported_module;

		addMessages(lang, messages);
	});
}
export const languages = [...languages_from_folder];

languages.forEach(e => {
	const _displayer = new Intl.DisplayNames([e], { type: 'language' })
	const _lang_name = _displayer.of(e);
	_language_names.set(e, _lang_name);
})

export const language_names = _language_names;

