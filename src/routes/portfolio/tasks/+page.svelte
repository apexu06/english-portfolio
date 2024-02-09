<script>
	export let data;
</script>

<h1>Tasks</h1>

{#each data.posts as task}
	<p>{task.meta.title}</p>
	<p>{task.meta.date}</p>
	<a href={task.path}>Read more</a>
{/each}
