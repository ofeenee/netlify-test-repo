import {
    PUBLIC_ANON,
    PUBLIC_URL
} from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { LayoutLoad } from './$types';

export const load = (async ({ fetch, data, depends }) => {
    depends('supabase:auth');

    const supabase = createSupabaseLoadClient({
        supabaseUrl: PUBLIC_URL,
        supabaseKey: PUBLIC_ANON,
        event: { fetch },
        serverSession: data.session
    });

    const {
        data: { session }
    } = await supabase.auth.getSession();

    return { supabase, session };
})satisfies LayoutLoad;