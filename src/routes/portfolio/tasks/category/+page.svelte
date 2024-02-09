<script>
	export let data;
</script>

<h1>Categories</h1>

<div class="flex flex-col gap-3">
	{#each data.categories as category}
		<a href="/portfolio/tasks/category/{category}">{category}</a>
	{/each}
</div>
