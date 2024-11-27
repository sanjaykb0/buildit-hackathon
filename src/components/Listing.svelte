<script>
    import { currentCredits } from "$lib/store";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let name = '';
    export let credits = 0;
    export let description = '';
    export let isSecondHand = false;

    const handleClick = () => {
      if ($currentCredits > credits) {
        $currentCredits -= credits;
        dispatch("success")
      } else {
        dispatch("fail")
      }
    }

    const placeholderImageURL = "src/components/placeholder-images-image_large.webp"
  </script>
  
  <div class="flex flex-col max-w-sm items-center bg-slate-200 shadow-md rounded-lg p-4 mb-4 relative gap-4">
    <!-- Thumbnail -->
    <div>
      <img 
        src={placeholderImageURL} 
        alt={name} 
        class="w-full h-full object-cover rounded-md"
      />
    </div>
  
    <!-- Product Details -->
    <div class="flex-grow">
      <div class="flex justify-between items-start">
        <h2 class="text-xl font-bold text-gray-800">{name}</h2>
        
        <!-- Credits Badge -->
        <div class="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-lg">
          {credits} Credits
        </div>
      </div>
  
      <!-- Second Hand Badge -->
      {#if isSecondHand}
        <span class="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          Second Hand
        </span>
      {/if}
  
      <!-- Description -->
      <p class="text-gray-600 mt-2">{description}</p>
    </div>

    <button 
      class="bg-blue-300 p-4 self-end"
      onclick={handleClick}
      >
        Buy Now
    </button>
  </div>