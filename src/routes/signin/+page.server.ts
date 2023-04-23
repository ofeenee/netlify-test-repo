import { AuthApiError, type Provider } from "@supabase/supabase-js";

import { fail, redirect } from "@sveltejs/kit";
let OauthProviders = ["google", "discord"];

export async function load({ locals }) {
  let session = await locals.getSession();
  if (session) {
    throw redirect(303, "/home");
  }
  return {};
}

export const actions = {
  signin: async ({ locals, url, request }) => {
    let formData = await request.formData();
    let body = Object.fromEntries(formData);
    const client = locals.supabase;
    const provider = url.searchParams.get("provider") as Provider;
    const withemail = url.searchParams.get("withemail");
    if (provider && !OauthProviders.includes(provider)) {
      return fail(400, { providererror: "wrong provider!" });
    }
    if (provider && OauthProviders.includes(provider)) {
      const { data, error } = await client.auth.signInWithOAuth({
        provider: provider,
      });
      if (error) {
        console.log(error);
        return fail(400, { message: error });
      } else if (!error) {
        console.log("success!", data);
        throw redirect(303, data.url);
      }
    }

    if (withemail === "true") {
      if (!body.emaild || !body.password) {
        if (!body.emailid) {
          return fail(400, {
            noEmaild: true,
          });
        } else if (!body.password || body.password === "otp") {
          const { error: err } = await client.auth.signInWithOtp({
            email: body.emailid as string,
          });

          if (err) {
            return fail(400, {
              message: err?.message || "failed to send otp",
            });
          }
          // return fail(400, {
          //   noPassword: true,
          // });
        }
      }
      const { error: err } = await client.auth.verifyOtp({
        email: body.emailid as string,
        token: body.password as string,
        type: "email",
      });

      if (err) {
        if (err instanceof AuthApiError && err.status === 400) {
          return fail(400, {
            invalidCredentials: true,
          });
        }

        return fail(500, {
          ServerError: "Server error sorry, pls try again",
        });
      }
    }
  },
  signout: async ({ locals }) => {
    const client = locals.supabase;
    const { error } = await client.auth.signOut();
    if (error) {
      console.log(error);
    }
    throw redirect(303, "/");
  },
};
