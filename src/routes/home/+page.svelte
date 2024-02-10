<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { ChevronRight } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	let loaded = false;
	onMount(() => (loaded = true));
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center">
	<div class="flex h-1/2 w-1/2 flex-col justify-between">
		{#if loaded}
			<div class="flex flex-col gap-4">
				<h1 transition:fly={{ y: -300 }} class="gradientText text-[80px]">My Portfolio</h1>
				<h3 transition:fly={{ y: 200, delay: 200 }} class="font-normal">
					by <b>Jakob Zelger</b>
				</h3>

				<div
					transition:fly={{ x: 200, delay: 300 }}
					class="h-3 w-72 rounded-full bg-foreground"
				></div>
				<h4 transition:fly={{ x: -200, delay: 100 }} class="font-normal">2023 - 2024</h4>
			</div>

			<div class="flex justify-end">
				<button
					class="group flex w-fit self-end text-xl transition"
					transition:fly={{ x: 200, delay: 400 }}
					on:click={() => {
						goto('/posts/categories');
					}}
				>
					<div class="flex items-center transition">
						<ChevronRight class="mr-[-8px] transition delay-150 group-hover:translate-x-4"
						></ChevronRight>
						<ChevronRight class="mr-[-8px] transition delay-75 group-hover:translate-x-4"
						></ChevronRight>
						<ChevronRight class="delay mr-3 transition group-hover:translate-x-4"></ChevronRight>
					</div>

					<span class="text-3xl transition group-hover:translate-x-2">Get <b>Started</b></span>
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
</style>
