<script>
    import { superForm } from 'sveltekit-superforms/client';
    import { enhance } from '$app/forms';

    export let data;
    const { form } = superForm(data.form);
</script>

<form method="POST" use:enhance>
    <label for="name">Name</label>
    <input type="text" name="name" bind:value={$form.name} />

    <label for="email">E-mail</label>
    <input type="email" name="email" bind:value={$form.email} />

    <div><button>Submit</button></div>
</form>
