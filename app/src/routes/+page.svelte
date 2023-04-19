<script lang="ts">
	import { user } from "$lib/stores";
	import type { PageData } from "./$types";

    export let data:PageData;

console.log(data.session);
</script>
<main class="flex h-full w-full justify-center ">
    <div class="max-w-[70%] h-full flex justify-center flex-col gap-y-4 ">

        <h1 class="text-3xl font-semibold font-abelLocal">
           Infinite Stores- Experience the infinite!
        </h1>
        <p class="text-xl">
           Best quality products, amazing experience
        </p>
        <a href={$user?'/home':'/signin'} class="inline-block self-center ">
        <button class="inline-block w-auto h-auto px-4 py-2   border-none btn font-normal text-xl capitalize font-archivoLocal bg-[#112136ff] hover:bg-[#163052] text-sky-200">
   Get started
        </button>
    </a>
    </div>
 
</main>

