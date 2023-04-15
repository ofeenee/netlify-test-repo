<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import "../app.postcss";
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
  
	export let data;
  
	$: ({ supabase, session } = data);
  
	onMount(() => {
	  const {
		data: { subscription },
	  } = supabase.auth.onAuthStateChange((event, _session) => {
		  invalidate('supabase:auth');
	  });
  
	  return () => subscription.unsubscribe();
	});
  </script>
  
  <slot />