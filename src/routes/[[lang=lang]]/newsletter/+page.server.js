import { superValidate } from 'sveltekit-superforms/server';
import { schema } from './schema';
import { fail } from '@sveltejs/kit';

export const load = (async () => {
    const form = await superValidate(schema);
    return { form };
});

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, schema);
        console.log('POST', form);

        if (!form.valid) {
            return fail(400, { form });
        }

        return { form };
    }
};