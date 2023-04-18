import type { User } from "@supabase/supabase-js";
import { writable, type Writable } from "svelte/store";


export let toastmsg=writable(null) as unknown as Writable<string|null>;
export let user=writable(null) as unknown as Writable<User|null>