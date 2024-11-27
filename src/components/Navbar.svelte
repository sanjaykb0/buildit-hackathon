<script>
    import { currentCredits, currentUserData } from "$lib/store";

    export let onProfileClick = () => {};
    export let openListings = () => {}

    $: user = currentUserData;
    export let onSignIn = () => {};
    export let onSignOut = () => {};

    const killMe = () => {
      console.log("KMS")
    }
  </script>
  
  <nav class="w-full border-b-2 border-gray-400 mb-8">
    <div class="container mx-auto px-4 flex justify-between items-center h-16">
      <div class="flex items-center">
        Available Credits: <b> {$currentCredits}</b>
      </div>

      <div class="flex items-center space-x-4">
        {#if user}
          <button 
            onclick={onProfileClick}
            class="rounded-full w-10 h-10 overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-all"
          >
            <img 
              src={user.photoURL} 
              alt="Profile" 
              class="w-full h-full object-cover"
            />
          </button>
        {/if}
  
        <button 
          onclick={user ? onSignOut : onSignIn}
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {user ? "Sign Out" : "Sign in"}
        </button>
  
        <button 
        onclick={openListings}
          class="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
        >
          My Listings
        </button>
      </div>
    </div>
  </nav>