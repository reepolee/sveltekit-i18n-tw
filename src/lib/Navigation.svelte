<script>
	import { page } from '$app/stores';
	import { PUBLIC_LANG_REPLACER } from '$env/static/public';
	import Logo from '$lib/Logo.svelte';
	import { language_names, languages } from '$lib/i18n';
	import cookies from 'js-cookie';
	import { _ } from 'svelte-i18n';
	import ThemeSwitch from './ThemeSwitch.svelte';

	$: lang = $page.data.lang;

	function set_lang_cookie(lang) {
		cookies.set('lang', lang, { expires: 365, path: '/' });
	}
</script>

<nav class="p-8">
	<div class="container mx-auto flex flex-col items-center gap-4 sm:flex-row md:justify-between" data-sveltekit-preload-data="off">
		<div class="flex w-full items-center justify-start gap-x-8">
			<Logo />
			<a href="/{lang}" data-sveltekit-reload>{$_('home.menu_label')}</a>
			<a href="/{lang}/about">{$_('about.menu_label')}</a>
		</div>
		<div class="flex w-full items-center justify-start gap-x-8 sm:justify-end">
			{#each languages as _lang}
				<a on:click={() => set_lang_cookie(_lang)} href={$page.route.id?.replace(PUBLIC_LANG_REPLACER, _lang) + $page.url.search}>{language_names.get(_lang)}</a
				>
			{/each}
		</div>

		{#if $page.data.user?.username}
			<a href="/auth/profile" class="font-bold text-reepolee-500">{$page.data.user.username}</a>
		{:else}
			<a href="/auth/login" class="min-w-max">{$_('auth.login.title')}</a>
		{/if}
		<ThemeSwitch />
	</div>
</nav>
