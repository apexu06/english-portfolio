<script>
	import { pageInfo } from './stores/localStorageStore';
</script>

<div class="flex h-10 w-64 gap-1 rounded-md bg-lightBackground p-1 shadow">
	<button
		on:click={() => ($pageInfo.categorySort = 'name')}
		class={`h-full w-1/2 rounded-md transition ${$pageInfo.categorySort === 'name' ? 'bg-foreground text-background' : ''}`}
		>Name</button
	>
	<button
		on:click={() => ($pageInfo.categorySort = 'count')}
		class={`h-full w-1/2 rounded-md transition ${$pageInfo.categorySort === 'count' ? 'bg-foreground text-background' : ''}`}
		>Count</button
	>
</div>
