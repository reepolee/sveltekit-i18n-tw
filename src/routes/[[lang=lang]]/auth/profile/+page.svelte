<script>
	import { enhance } from '$app/forms';
	import InputField from '$src/lib/InputField.svelte';
	import { _ } from 'svelte-i18n';

	export let data;
</script>

<main class="container mx-auto grid place-items-center gap-8">
	<h1>{$_('auth.profile.title')}</h1>

	<div class="paper grid place-items-center gap-8 rounded-2xl p-8">
		<InputField>
			<label for="username">{$_('auth.profile.label_id')}: </label>
			<p class="w-50ch font-bold">{data.userId}</p>
		</InputField>

		<InputField>
			<label for="password">{$_('auth.profile.label_email')}:</label>
			<p class="w-50ch font-bold">{data.username}</p>
		</InputField>

		<form method="post" action="?/logout" use:enhance>
			<input type="submit" value={$_('auth.profile.logout_caption')} class="button underline" />
		</form>
	</div>
</main>
