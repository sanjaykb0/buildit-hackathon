<script>
    import { createEventDispatcher } from "svelte";
    import Listing from "../components/Listing.svelte";
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia est magnam incidunt repellendus modi, necessitatibus laborum deleniti ipsam doloremque, dolorum accusantium facilis consequuntur ex consequatur eos sit provident vel?";
    export let listings;
    export let secondHandListingsOnly = false;

    const dispatch = createEventDispatcher();

    const handleSuccess = (listing) => {
        dispatch("success", {item: listing});
    }

    const handleFail = (listing) => {
        dispatch("fail", {item: listing});
    }
</script>


<main>
    <!-- <h1 class="font-times italic font-bold tracking-tight text-7xl leading-loose">Active Listings</h1> -->
    <section class="w-full flex gap-8 flex-wrap">
        {#each listings as listing}
            {#if listing.isSecondHand === secondHandListingsOnly}
                <Listing name={listing.name}
                    on:success={() => handleSuccess(listing)}
                    on:fail={handleFail}
                    credits={listing.vaue /* screwed up name */}  
                    isSecondHand={listing.isSecondHand}
                    description={listing.description}
                    thumbnail={listing.thumbnail}
                /> 
            {/if}
        {/each}
    </section>
</main>