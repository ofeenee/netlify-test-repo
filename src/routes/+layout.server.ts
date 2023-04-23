export const csr = true;
export const ssr = true;
export const prerender = true;

export async function load({ locals: { getSession } }) {
  return {
    session: await getSession(),
  };
}
