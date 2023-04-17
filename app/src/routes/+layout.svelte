<script lang="ts">
	import '../app.postcss';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly, fade,scale } from 'svelte/transition';
	import { toastmsg } from '$lib/stores';
	import {cubicInOut} from "svelte/easing"

	export let data;
	$: hideToast = false;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			invalidate('supabase:auth');
		});

		return () => subscription.unsubscribe();
	});
</script>

{#if $toastmsg}

	<div
		in:fade={{ duration: 500,delay:0,easing:cubicInOut }}
		out:fade={{ duration: 1000 ,easing:cubicInOut}}
		class="bg-gray-800 p-3 rounded-xl inline-block absolute right-4 bottom-4 text-lg text-teal-500 border-2 border-pink-500"
	>
		<p>
			{$toastmsg}
		</p>
	</div>
{/if}
<slot />
