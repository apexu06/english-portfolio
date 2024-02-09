<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import { ChevronRight } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	let loaded = false;
	onMount(() => (loaded = true));
</script>

<div
	class="flex h-full w-full flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-pink-500 text-white"
>
	{#if loaded}
		<div class="flex flex-col gap-4">
			<h1 transition:fly={{ y: 300 }} class="text-[80px]">My Portfolio</h1>
			<h3 transition:fly={{ y: 200, delay: 200 }} class="font-normal">by Jakob Zelger</h3>
			<button
				class="group flex w-fit self-end p-4 text-xl text-foreground transition"
				transition:fly={{ x: 200, delay: 400 }}
				on:click={() => {
					goto('/portfolio/overview');
				}}
			>
				<div class="flex items-center transition">
					<ChevronRight class="mr-[-8px] transition delay-150 group-hover:translate-x-4"
					></ChevronRight>
					<ChevronRight class="mr-[-8px] transition delay-75 group-hover:translate-x-4"
					></ChevronRight>
					<ChevronRight class="delay mr-3 transition group-hover:translate-x-4"></ChevronRight>
				</div>

				<span class="text-[20px] font-bold">Get Started</span>
			</button>
		</div>
	{/if}
</div>
