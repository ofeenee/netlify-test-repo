import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load:PageServerLoad = async ({locals:{getSession}}) => {
    let session=await getSession();
    if(session?.user){
        throw redirect(303,'/home')
    }

    return {
    }
};