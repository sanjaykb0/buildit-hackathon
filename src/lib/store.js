import { writable } from 'svelte/store';

export let currentUserData = writable(null);
export let currentCredits = writable(1000);
export let currentInventory = writable([]);