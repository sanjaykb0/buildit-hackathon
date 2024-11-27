<script>
	import '../app.css';
	import { onMount } from "svelte";
    import "../app.css";
    import { page } from '$app/stores';
    import Navbar from "../components/Navbar.svelte";
    import Sidebar from '../components/Sidebar.svelte';

    import { googleProvider } from '$lib/firebase/config';
    import { signInWithPopup, signOut } from 'firebase/auth';
    import { currentUserData } from '$lib/store';

    let isSidebarToggled = $state(false);

    let { data, children } = $props()
    const { auth, app, listings } = data;


    const handleSignIn = async () => {
        await signInWithPopup(auth, googleProvider).then(result => {
            $currentUserData = result.user;
        }).then(() => {
            console.log($currentUserData)
        });
    }

    const handleSignOut = async () => {
        $currentUserData = null;
    }

    const handleListingsClick = () => {
        isSidebarToggled = !isSidebarToggled
    }
</script>
<Navbar 
    profileImage="/path/to/profile.jpg"
    onSignIn={handleSignIn}
    onSignOut={handleSignOut}
    openListings={handleListingsClick}
/>

{#if isSidebarToggled}
    <Sidebar handleClick={handleListingsClick}/>
{/if}

{@render children()}