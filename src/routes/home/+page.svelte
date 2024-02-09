<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import { ChevronRight } from 'lucide-svelte';
	let loaded = false;
	onMount(() => (loaded = true));
</script>

<div class="gradient flex h-full w-full flex-col items-center justify-center text-white">
	{#if loaded}
		<div class="flex flex-col gap-4">
			<h1 transition:fly={{ y: 200 }} class="text-[80px]">My Portfolio</h1>
			<h3 transition:fly={{ y: 200, delay: 200 }} class="font-normal">by Jakob Zelger</h3>
			<button
				class="group flex w-fit self-end p-4 text-xl text-foreground transition"
				transition:fly={{ x: 200, delay: 400 }}
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

<style>
	.shade {
		box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.1);
	}

	.gradient {
		background: linear-gradient(90deg, rgba(169, 0, 222, 1) 0%, rgba(0, 174, 255, 1) 100%);
	}
</style>
