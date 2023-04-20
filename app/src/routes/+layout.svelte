<script lang="ts">
	import '../app.postcss';
	import '$lib/assets/fonts/stylesheet.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { toastmsg, user } from '$lib/stores';
	import { cubicInOut } from 'svelte/easing';

	export let data;
	$: ({ supabase, session } = data);
	$: {
		if (session?.user) {
			user.set(session.user);
		} else if (!session?.user) {
			user.set(null);
		}
	}
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
		in:scale={{ duration: 500, delay: 0, easing: cubicInOut }}
		out:fade={{ duration: 400, easing: cubicInOut }}
		class:border-red-600={$toastmsg.error}
		class="bg-gray-900 font-abelLocal p-3 border-x-4 rounded-xl inline-block absolute right-4 bottom-4 text-2xl text-stone-400 "
	>
		<p>
			{$toastmsg.message}
		</p>
	</div>
{/if}

<slot />


<!-- 
	App color pallete
--dark-purple: #231123ff;
--rich-black: #110e1eff;
--oxford-blue: #112136ff;
--straw: #cad66eff;
--nyanza: #d4f2dbff; -->
