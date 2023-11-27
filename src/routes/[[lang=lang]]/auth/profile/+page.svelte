<script>
	import { enhance } from '$app/forms';
	import Field from '$src/lib/Field.svelte';
	import { _ } from 'svelte-i18n';

	export let data;
</script>

<main class="container mx-auto grid place-items-center gap-8">
	<h1>{$_('auth.profile.title')}</h1>

	<div class="card grid place-items-center gap-8 rounded-2xl bg-paper p-8">
		<Field>
			<div>{$_('auth.profile.label_id')}:</div>
			<p class="w-50ch font-bold">{data.userId}</p>
		</Field>

		<Field>
			<div>{$_('auth.profile.label_email')}:</div>
			<p class="w-50ch font-bold">{data.username}</p>
		</Field>

		<form method="post" action="?/logout" use:enhance>
			<input type="submit" value={$_('auth.profile.logout_caption')} class="button primary" />
		</form>
	</div>
</main>
