<script>
	import LightDark from '$svg/light-dark.svg?raw';
	import cookies from 'js-cookie';

	function flip_theme() {
		let cookie_theme = cookies.get('theme') === 'dark' ? 'light' : 'dark';
		cookies.set('theme', cookie_theme, { expires: 365, path: '/' });
		document.documentElement.dataset.theme = cookie_theme;
	}
</script>

<button on:click={flip_theme} title="Switch theme">
	{@html LightDark}
</button>
