<script>
	import { SunIcon, MoonIcon } from 'lucide-svelte';
	import { mode, toggleMode } from 'mode-watcher';
</script>

<button on:click={toggleMode}>
	{#if $mode === 'dark'}
		<SunIcon class="h-8 w-8" />
	{:else}
		<MoonIcon class="h-8 w-8" />
	{/if}
</button>
