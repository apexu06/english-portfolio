<script>
	import { SunIcon, MoonIcon } from 'lucide-svelte';
	import { mode, toggleMode } from 'mode-watcher';
</script>

<button on:click={toggleMode}>
	{#if $mode === 'dark'}
		<SunIcon class="h-7 w-7" />
	{:else}
		<MoonIcon class="h-7 w-7" />
	{/if}
</button>
