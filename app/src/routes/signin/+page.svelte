<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { toastmsg } from '$lib/stores';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;
	$: if (form?.providererror) {
		toastmsg.set("Sorry provider you provided isn't supported!");
		let setid = setTimeout(() => {
			toastmsg.set(null);
			clearTimeout(setid);
		}, 5000);
	}
</script>

<form method="POST" use:enhance>
	<button formaction="?/signin&provider=github" type="submit" class="btn bg-blue-500 text-sky-200">
		Signin!
	</button>
</form>

<form action="?/signout" method="POST">
	<button class="btn bg-sky-700"> Signout </button>
</form>
