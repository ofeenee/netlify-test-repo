import type { Handle } from '@sveltejs/kit';
import { PUBLIC_ANON, PUBLIC_URL } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';

export const handle = (async ({ resolve, event }) => {
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_URL,
        supabaseKey: PUBLIC_ANON,
        event
    });

    event.locals.getSession = async () => {
        const {
            data: { session }
        } = await event.locals.supabase.auth.getSession();
        return session;
    };

    const types = ["css", "font", "js"];
    const response = await resolve(event, {
        preload: ({ type }) => types.includes(type),
      
    });
    return response;

}) satisfies Handle