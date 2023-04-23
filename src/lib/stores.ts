import type { User } from "@supabase/supabase-js";
import { writable, type Writable } from "svelte/store";

interface toast{
    message: string,
    error?: boolean


}
export let toastmsg=writable(null) as unknown as Writable<toast|null>;
export let user=writable(null) as unknown as Writable<User|null>