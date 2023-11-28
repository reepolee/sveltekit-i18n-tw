<script>
	import { language_names } from '$src/lib/i18n';
	import { _, isLoading } from 'svelte-i18n';
	export let data;
</script>

<svelte:head>
	<title>
		{$_('home.title')}
	</title>
</svelte:head>

{#if !$isLoading}
	<div class="container mx-auto">
		<h1 class="text-3xl font-bold">{$_('general.welcome')}</h1>
		<p>{language_names.get(data.lang)}</p>
	</div>
{/if}
