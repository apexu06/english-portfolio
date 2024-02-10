<script>
	export let data;
</script>

<h1 class="mb-8">Categories</h1>

<div class="flex h-full w-full flex-col items-center gap-6 overflow-y-scroll">
	{#each data.categories as category}
		<div class="flex h-20 w-2/3 items-center justify-between bg-navBackground p-4 shadow-default">
			<a href="/portfolio/posts/categories/{category}"><b>{category.name}</b></a>
			<span>{category.count} Posts</span>
		</div>
	{/each}
</div>
