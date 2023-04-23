import { redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {
	let session=await locals.getSession();
	if(!session){
		throw redirect(303,'/')
	}
    return {};
}) satisfies PageServerLoad;

export const actions:Actions={
    signout: async ({ locals }) => {
		const client = locals.supabase;
		const { error } = await client.auth.signOut();
		if(error){
			console.log(error)
		}
		throw redirect(303,"/")
	}
}