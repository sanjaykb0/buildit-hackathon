<script>
    import Listing from "../components/Listing.svelte";
    import Dashboard from "../components/Dashboard.svelte";
    import Navbar from "../components/Navbar.svelte";
    import Search from "../components/Search.svelte";
    let { data } = $props();

    import { db } from "$lib/firebase/config";

    let activeTag = $state('Original');
    let tags=['Original', 'Resale'];
    let toggleTag = $state(false);
    let listings = $state(JSON.parse(data.listings))

    function handleTagClick(tag) {
        toggleTag = tag === activeTag ? toggleTag : !toggleTag;
        activeTag = tag;
    }

    const handleSuccess = event => {
        const listing = event.detail.item;
        listings = listings.filter(l => {
            l.creatorUid !== listing.creatorUid
        })
    }

    const handleFail =  event => {
        const listing = event.item;
    }

</script>

<main class="flex flex-col gap-6 min-w-full max-w-7xl">
   
    <h1 class="font-times italic font-bold tracking-tight text-7xl">Active Listings</h1>
    <div class="flex">
        <div class="flex flex-wrap gap-2">
            {#each tags as tag}
                <button 
                    onclick={() => handleTagClick(tag)}
                    class="px-3 py-1 rounded-full text-sm transition-colors duration-200 {
                        activeTag === tag 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }"
                >
                {tag}
                </button>
            {/each}
        </div>
    </div>

    <Dashboard 
    on:success={handleSuccess}
    on:fail={handleFail}
    secondHandListingsOnly={toggleTag} 
    listings={JSON.parse(data.listings)}/>
</main>