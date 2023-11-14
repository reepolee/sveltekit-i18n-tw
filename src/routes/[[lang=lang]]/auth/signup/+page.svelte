<script>
	import { enhance } from '$app/forms';
	import InputField from '$src/lib/InputField.svelte';
	import { _ } from 'svelte-i18n';

	export let form;
</script>

<main class="container mx-auto grid place-items-center gap-8">
	<h1>{$_('auth.signup.title')}</h1>

	<form method="post" use:enhance class=" grid place-items-center gap-8 rounded-2xl p-8">
		<InputField>
			<label for="username">{$_('auth.signup.label_email')}:</label>
			<input name="username" id="username" class="w-50ch rounded" />
		</InputField>

		<InputField>
			<label for="password">{$_('auth.signup.label_password')}:</label>
			<input type="password" name="password" id="password" class="w-50ch rounded" />
		</InputField>
		{#if form?.message}
			<p class="error">{form.message}</p>
		{/if}

		<input type="submit" class="btn btn-primary" value={$_('auth.signup.button_caption')} />
	</form>
	<a href="/auth/login" class="underline">{$_('auth.signup.login_caption')}</a>
</main>
