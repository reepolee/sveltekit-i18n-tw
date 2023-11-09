<script>
  import { _ } from "svelte-i18n";
  import { language_names, languages } from "$lib/i18n";
  import { page } from "$app/stores";
  import { PUBLIC_LANG_REPLACER } from "$env/static/public";
  import Logo from "$lib/Logo.svelte";
  import ThemeSwitch from "./ThemeSwitch.svelte";

  $: lang = $page.data.lang;
</script>

<nav class="p-8">
  <div
    class="container mx-auto flex flex-col sm:flex-row gap-4 items-center md:justify-between"
    data-sveltekit-preload-data="off"
  >
    <div class="flex gap-x-8 items-center justify-start w-full">
      <Logo />
      <a href="/{lang}" data-sveltekit-reload>{$_("home.menu_label")}</a>
      <a href="/{lang}/about">{$_("about.menu_label")}</a>
    </div>
    <div class="flex items-center gap-x-8 justify-start sm:justify-end w-full">
      {#each languages as _lang}
        <a
          href={$page.route.id?.replace(PUBLIC_LANG_REPLACER, _lang) +
            $page.url.search}>{language_names.get(_lang)}</a
        >
      {/each}
    </div>

    <ThemeSwitch />
  </div>
</nav>
