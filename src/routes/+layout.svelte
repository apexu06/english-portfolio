<script>
	import NavBar from '$lib/components/navbar/NavBar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { fade } from 'svelte/transition';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();

	export let data;
</script>

<ModeWatcher />
<div class="h-screen w-screen">
	<div class="h-20">
		<NavBar />
	</div>
	{#key data.currentRoute}
		<main
			in:fade={{ duration: 100, delay: 150 }}
			out:fade={{ duration: 100 }}
			class="flex h-[calc(100vh-5rem)] flex-col items-center px-4 py-16 sm:px-16"
		>
			<slot />
		</main>
	{/key}
</div>
