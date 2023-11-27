<script>
	import { enhance } from '$app/forms';
	import Field from '$lib/Field.svelte';
	import { _ } from 'svelte-i18n';
	export let form;
</script>

<main class="container mx-auto grid place-items-center gap-8">
	<h1>{$_('auth.login.title')}</h1>

	<form method="post" use:enhance class="card grid place-items-center gap-8 rounded-2xl bg-paper p-8">
		<Field>
			<label for="username">{$_('auth.login.label_email')}:</label>
			<input type="email" name="username" id="username" class="w-50ch rounded" />
		</Field>

		<Field>
			<label for="password">{$_('auth.login.label_password')}:</label>
			<input type="password" name="password" id="password" class="w-50ch rounded" />
		</Field>
		{#if form?.message}
			<p class="error">{$_(form.message)}</p>
		{/if}
		<input type="submit" class="button primary" value={$_('auth.login.button_caption')} />
	</form>

	<a href="/auth/signup" class="underline">{$_('auth.login.signup_caption')}</a>
</main>
