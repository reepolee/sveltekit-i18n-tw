<script>
	import { page } from '$app/stores';
	import { PUBLIC_DEFAULT_LOCALE, PUBLIC_LANG_REPLACER } from '$env/static/public';
	import Navigation from '$lib/Navigation.svelte';
	import '$src/app.postcss';
	import { languages } from '$src/lib/i18n';
	import { _, locale } from 'svelte-i18n';

	// locale.set($page.data.lang);
	$: locale.set($page.data.lang);
</script>

<svelte:head>
	{#each languages as l}
		<link rel="alternate" hreflang={l} href={$page.route?.id.replace(PUBLIC_LANG_REPLACER, l) + $page.url.search} />
	{/each}

	<link
		rel="alternate"
		hreflang="x-default"
		href={$page.route?.id.replace(PUBLIC_LANG_REPLACER, PUBLIC_DEFAULT_LOCALE) + $page.url.search}
	/>
</svelte:head>

{#if $_('general.loaded') === 'loaded'}
	<Navigation />

	<slot />

	<pre>

		{JSON.stringify($page.data)}
	</pre>
{/if}
