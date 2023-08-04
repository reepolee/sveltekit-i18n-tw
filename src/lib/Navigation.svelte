<script>
    import { _ } from 'svelte-i18n';
    import { language_names, languages } from '$lib/i18n';
    import { page } from '$app/stores';
    import { PUBLIC_LANG_REPLACER } from '$env/static/public';

    $: lang = $page.data.lang;
</script>

<nav class="p-8">
    <div
        class="container mx-auto flex flex-col sm:flex-row gap-4 items-center md:justify-between"
        data-sveltekit-preload-data="off"
    >
        <div class="flex gap-x-8 items-center justify-start w-full">
            <img src="/favicon.png" class="w-12 h-12" alt="Reepolee logo" />
            <a href="/{lang}" data-sveltekit-reload>{$_('general.home.caption')}</a>
            <a href="/{lang}/about">{$_('about.menu_label')}</a>
        </div>
        <div class="flex items-center gap-x-8 justify-start sm:justify-end w-full">
            {#each languages as _lang}
                <a href={$page.route.id?.replace(PUBLIC_LANG_REPLACER, _lang) + $page.url.search}
                    >{language_names.get(_lang)}</a
                >
            {/each}
        </div>
    </div>
</nav>
