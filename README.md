# SvelteKit i18n starter

This is a starter like we use here at Reepolee for all our SvelteKit projects. We're using the [svelte-i18n](https://github.com/kaisermann/svelte-i18n) library and [i18n-ally](https://github.com/lokalise/i18n-ally) VSCode extension. [Tailwind](https://tailwindcss.com/) is set up as a CSS helper.

## Setup

After cloning, copy `.env.example` to `.env` and run the following from the project folder as you would for any SvelteKit project:

```bash
pnpm install
pnpm run dev
```

Point your browser to http://localhost:5173 and enjoy your multi language app.

## How it works

Optional parameter `[[lang=lang]]` is set as the top route. If it's present in the URL, hooks will set a cookie for it as selected language and forward it as `locals.lang`. If `lang` param is not present, `locals.lang` will be set from either cookie, request header or default value.

That way the app is always aware of what `locale` should be set and rendered.

## Translations

Translations reside in `/src/translations` folder. A subfolder is created for every supported language, for example `en`, `de` and `sl`. Subfolder contains JSON files with translations. Nesting is possible and you access a translated text by its key. For example in a file called `home.json` with the following content:

```json
{
	"url": "/sl",
	"caption": "Domov",
	"menu_label": "Domov",
	"title": "Reepolee Starter"
}
```

you can display `Reepolee Starter` by accessing the translated string with `{$_('home.title')}`.

Languages can be sorted by prefixing the code with a number or characters. For example, folder names could be `1-sl`,`2-en`,`3-de`. Hyphen is a simple separator to allow for alphabetical sort and anything before it is discarded.

## Theming

Tailwind classes `light` and `dark` are used on `<HTML>` tag to switch between themes. Class is set from cookie, defaults to `prefers-color-scheme`. Helper component `<ThemeSwitch>` is available within navigation. Theme colors are defined in `src/theme.postcss`.

## TODO

- translate `/auth`
- make <LanguageSwitcher>
