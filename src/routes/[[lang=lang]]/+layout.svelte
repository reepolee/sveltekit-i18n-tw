<script>
  import "$src/app.postcss";
  import Navigation from "$lib/Navigation.svelte";
  import { locale, _ } from "svelte-i18n";
  import { page } from "$app/stores";
  import { languages } from "$src/lib/i18n";
  import {
    PUBLIC_DEFAULT_LOCALE,
    PUBLIC_LANG_REPLACER,
  } from "$env/static/public";

  // locale.set($page.data.lang);
  $: locale.set($page.data.lang);
</script>

<svelte:head>
  {#each languages as l}
    <link
      rel="alternate"
      hreflang={l}
      href={$page.route?.id.replace(PUBLIC_LANG_REPLACER, l) + $page.url.search}
    />
  {/each}

  <link
    rel="alternate"
    hreflang="x-default"
    href={$page.route?.id.replace(PUBLIC_LANG_REPLACER, PUBLIC_DEFAULT_LOCALE) +
      $page.url.search}
  />
</svelte:head>

{#if $_("general.loaded") === "loaded"}
  <Navigation />

  <slot />
{/if}
