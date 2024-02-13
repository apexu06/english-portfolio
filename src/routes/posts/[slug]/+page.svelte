<script lang="ts">
	export let data;
</script>

<article class="prose prose-xl prose-neutral w-full dark:prose-invert">
	<div class="not-prose text-foreground">
		<h1>{data.title}</h1>
		<p>{data.date}</p>
	</div>
	<svelte:component this={data.content} />
</article>

<!-- {#if data.comments} -->
<!-- 	<h3>Comments</h3> -->
<!-- 	{#each data.comments as comment} -->
<!-- 		<div> -->
<!-- 			<p>{comment.createdAt}</p> -->
<!-- 			<p>{comment.content}</p> -->
<!-- 		</div> -->
<!-- 	{/each} -->
<!-- {/if} -->
