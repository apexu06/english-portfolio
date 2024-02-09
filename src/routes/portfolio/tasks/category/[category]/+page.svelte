<script>
	export let data;
</script>

<div>
	{#each data.posts as post}
		<h2>{post.metadata.title}</h2>
		<p>{post.metadata.date}</p>
		<a href={post.path}>Read more</a>
	{/each}
</div>
