<script>
	import { page } from '$app/stores';
	import cookies from 'js-cookie';
	import { onMount } from 'svelte';

	let cookie_theme = cookies.get('theme');
	let theme_set = cookie_theme || false;
	onMount(() => {
		if (!cookie_theme) {
			cookie_theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			cookies.set('theme', cookie_theme || 'light');
			document.documentElement.removeAttribute('class');
			document.documentElement.className = cookie_theme;
		}
		theme_set = true;
	});
</script>

<div class:hidden={!theme_set || !$page.data.lang}>
	<slot />
</div>
