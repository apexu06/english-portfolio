<script>
	import { pageInfo } from './stores/localStorageStore';
</script>

<div class="flex h-10 w-48 gap-1 rounded-md bg-lightBackground p-1 shadow md:w-64">
	<button
		on:click={() => ($pageInfo.categorySortOrder = 'name')}
		class={`h-full w-1/2 rounded-md transition ${$pageInfo.categorySortOrder === 'name' ? 'bg-foreground text-background' : ''}`}
		>Name</button
	>
	<button
		on:click={() => ($pageInfo.categorySortOrder = 'count')}
		class={`h-full w-1/2 rounded-md transition ${$pageInfo.categorySortOrder === 'count' ? 'bg-foreground text-background' : ''}`}
		>Count</button
	>
</div>
