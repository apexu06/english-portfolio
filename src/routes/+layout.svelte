<script>
	import NavBar from '$lib/navbar/NavBar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { fade, fly } from 'svelte/transition';

	export let data;
</script>

<ModeWatcher />
<div class="h-screen w-screen">
	<div class="h-20">
		<NavBar />
	</div>
	{#key data.currentRoute}
		<main
			in:fly={{ x: 200, duration: 150, delay: 100 }}
			out:fly={{ x: -200, duration: 150 }}
			class="h-[calc(100vh-5rem)]"
		>
			<slot />
		</main>
	{/key}
</div>
