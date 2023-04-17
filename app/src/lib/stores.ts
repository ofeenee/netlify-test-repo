import { writable, type Writable } from "svelte/store";


export let toastmsg=writable(null) as unknown as Writable<string|null>;