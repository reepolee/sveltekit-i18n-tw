<script>
    import { language_names } from '$src/lib/i18n';
    import { _, isLoading } from 'svelte-i18n';
    export let data;
</script>

{#if !$isLoading}
    <div class="p-2 md:p-8">
        <h1 class="font-bold text-3xl">{$_('general.welcome')}</h1>
        <p>{language_names.get(data.lang)}</p>
    </div>
{/if}
