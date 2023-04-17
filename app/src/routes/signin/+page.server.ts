import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    signin:async({locals})=>{
        const client=locals.supabase;
        const { data, error } = await client.auth.signInWithOAuth({
            provider: 'discord',
          })



    },
    signout:async({locals})=>{
        const client=locals.supabase;
        const {  error } = await client.auth.signOut()

    }


}