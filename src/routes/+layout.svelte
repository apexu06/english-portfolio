<script>
	import NavBar from '$lib/navbar/NavBar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<div class="h-screen w-screen">
	<div class="h-20">
		<NavBar />
	</div>
	<div class="h-[calc(100vh-5rem)]">
		<slot />
	</div>
</div>
