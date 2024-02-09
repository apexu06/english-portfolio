<script>
	import { Github } from 'lucide-svelte';
	import ModeToggle from './ModeToggle.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let loaded = false;
	onMount(() => (loaded = true));

	let currentPageName = '';
	$: $page,
		(() => {
			let pageUrlParts = $page.url.pathname.split('/');
			currentPageName = pageUrlParts[pageUrlParts.length - 1];
		})();
</script>

{#if loaded}
	<nav
		class="flex h-full w-screen items-center justify-between bg-navBackground px-8 text-foreground shadow-default"
	>
		<button on:click={() => goto('/home')} transition:fly={{ x: -200, duration: 400 }}>
			<h2 class="text-[30px]">
				{currentPageName.charAt(0).toUpperCase() + currentPageName.slice(1)}
			</h2>
		</button>
		<div class="flex gap-4" transition:fly={{ x: 200, duration: 400 }}>
			<ModeToggle />
			<a href="https://github.com/apexu06/english-portfolio">
				<Github class="h-7 w-7"></Github>
			</a>
		</div>
	</nav>
{/if}
