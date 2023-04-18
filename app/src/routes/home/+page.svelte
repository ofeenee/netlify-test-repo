<script lang="ts">
	import Btn from '$lib/Btn.svelte';
	import { user } from '$lib/stores';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if $user}
<div class="flex h-full justify-center items-center">
	<form method="POST">
		<button
			formaction="?/signout"
			class="border-none btn font-normal text-xl capitalize font-archivo bg-[#112136ff] hover:bg-[#163052] text-sky-200"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-6 h-6" viewBox="0 0 32 32"
				><path
					fill="currentColor"
					d="M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2Z"
				/><path
					fill="currentColor"
					d="M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6l-1.414-1.414z"
				/></svg
			>SignOut
		</button>
	</form>
</div>
{/if}
