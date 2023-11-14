<script>
	import { enhance } from '$app/forms';
	import InputField from '$src/lib/InputField.svelte';
	import { _ } from 'svelte-i18n';
	export let form;
</script>

<main class="container mx-auto grid place-items-center gap-8">
	<h1>{$_('auth.login.title')}</h1>

	<form method="post" use:enhance class="card bg-paper grid place-items-center gap-8 rounded-2xl p-8">
		<InputField>
			<label for="username">{$_('auth.login.label_email')}:</label>
			<input type="email" name="username" id="username" class="w-50ch rounded" />
		</InputField>

		<InputField>
			<label for="password">{$_('auth.login.label_password')}:</label>
			<input type="password" name="password" id="password" class="w-50ch rounded" />
		</InputField>
		{#if form?.message}
			<p class="error">{$_(form.message)}</p>
		{/if}
		<input type="submit" class="button" value={$_('auth.login.button_caption')} />
	</form>

	<a href="/auth/signup" class="underline">{$_('auth.login.signup_caption')}</a>
</main>
