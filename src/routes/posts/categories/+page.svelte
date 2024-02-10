<script>
	import { goto } from '$app/navigation';

	export let data;
</script>

<h1 class="mb-8">Categories</h1>

<div class="flex h-full w-full flex-col items-center gap-6 overflow-y-scroll">
	{#each data.categories as category}
		<button
			on:click={() => goto('/posts/categories/' + category.name)}
			class="flex h-20 w-2/3 items-center justify-between bg-navBackground px-8 shadow-default"
		>
			<span>{category.name}</span>
			<span>{category.count} Posts</span>
		</button>
	{/each}
</div>
