import type { Provider } from '@supabase/supabase-js';
import type { Actions } from '../$types';
import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
let OauthProviders = ['google', 'discord'];

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	signin: async ({ locals, url }) => {
		const client = locals.supabase;
		const provider = url.searchParams.get('provider') as Provider;
		if (!OauthProviders.includes(provider)) {
			return fail(400, { providererror: 'wrong provider!' });
		}
		if (OauthProviders.includes(provider)) {
			const { data, error } = await client.auth.signInWithOAuth({
				provider: provider
			});
			if (error) {
				console.log(error);
				return fail(400, { message: error });
			} else if (!error) {
				console.log('success!', data);
				throw redirect(303, data.url);
			}
		}
	},
	signout: async ({ locals }) => {
		const client = locals.supabase;
		const { error } = await client.auth.signOut();
		if(error){
			console.log(error)
		}
		throw redirect(303,"/")
	}
};
