<script>
    import { createEventDispatcher } from "svelte";
    import { slide, fly, fade } from "svelte/transition";

    const dispatch = createEventDispatcher();
    export let handleClick = () => {}

</script>


<main transition:fly={{x : 500, opacity:1}}>
    <section class="flex justify-between items-center w-full py-8 border-b-2 border-white">
        <h1 class="text-2xl font-inter font-bold">Current Listings</h1>
        <button 
            class="text-sm font-inter"
            onclick={handleClick}>
            EXIT
        </button>

    </section>
    <div>
        <h2 class="text-lg font-inter font-bold">INVENTORY</h2>
    </div>
    <div>
        <h2 class="text-lg font-inter font-bold">CURRENT RESALE LISTINGS</h2>
    </div>

</main>


<style>
    main {
        @apply bg-black;
        @apply text-white;
        @apply h-full;
        @apply min-w-96;
        @apply absolute;
        @apply right-0;
        @apply z-50;
        @apply px-8;
    }



</style>