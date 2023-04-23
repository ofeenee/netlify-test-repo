import { redirect } from "@sveltejs/kit";

export const prerender = false;

export async function load({ locals }) {
  let session = await locals.getSession();
  if (!session) {
    throw redirect(303, "/");
  }
  return {};
}

export const actions = {
  signout: async ({ locals }) => {
    const client = locals.supabase;
    const { error } = await client.auth.signOut();
    if (error) {
      console.log(error);
    }
    throw redirect(303, "/");
  },
};
