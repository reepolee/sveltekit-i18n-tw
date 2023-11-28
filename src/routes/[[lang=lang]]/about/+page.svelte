<script>
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>
		{$_('about.title')}
	</title>
</svelte:head>

<div class="container mx-auto">
	<h1 class="text-3xl font-bold">{$_('about.title')}</h1>
</div>
