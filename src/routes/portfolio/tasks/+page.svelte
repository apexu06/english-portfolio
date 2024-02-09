<script>
	export let data;
</script>

<h1>Tasks</h1>

{#each data.posts as task}
	<p>{task.metadata.title}</p>
	<p>{task.metadata.date}</p>
	<a href={task.path}>Read more</a>
{/each}
