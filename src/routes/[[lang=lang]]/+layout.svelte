<script>
    import '$src/app.postcss';
    import Navigation from '$lib/Navigation.svelte';
    import { locale, isLoading, locales } from 'svelte-i18n';
    import { page } from '$app/stores';

    locale.set($page.data.lang);
    $: locale.set($page.data.lang);
</script>

<pre>{JSON.stringify($locales)}</pre>
<pre>{JSON.stringify($locale)}</pre>
<pre>{JSON.stringify($isLoading)}</pre>

{#if !$isLoading}
    <Navigation />

    <slot />
{/if}
