<script lang="ts">
	export let data;
</script>

<article class="prose prose-xl prose-neutral max-w-none dark:prose-invert">
	<div class="not-prose">
		<h1 class="font-playfair">{data.title}</h1>
		<p>{data.date}</p>
	</div>
	<svelte:component this={data.content} />
</article>

{#if data.comments}
	<h3>Comments</h3>
	{#each data.comments as comment}
		<div>
			<p>{comment.createdAt}</p>
			<p>{comment.content}</p>
		</div>
	{/each}
{/if}
