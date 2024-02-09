<script>
	import { Github } from 'lucide-svelte';
	import ModeToggle from './ModeToggle.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';

	let loaded = false;
	onMount(() => (loaded = true));
</script>

{#if loaded}
	<nav class="flex h-full w-screen items-center justify-between bg-background px-8 text-foreground">
		<button on:click={() => goto('/home')} transition:slide={{ axis: 'y' }}>
			<h2 class="text-[30px]">portfolio</h2>
		</button>
		<div class="flex gap-4" transition:fly={{ x: 200 }}>
			<ModeToggle />
			<a href="https://github.com/apexu06/english-portfolio">
				<Github class="h-7 w-7"></Github>
			</a>
		</div>
	</nav>
{/if}

<style>
	nav {
		box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
	}
</style>
