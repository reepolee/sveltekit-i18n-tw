<script>
  import { page } from "$app/stores";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>
    {$_("about.title")}
  </title>
</svelte:head>

<div class="p-2 md:p-8">
  <h1 class="font-bold text-3xl">{$_("about.title")}</h1>
</div>
