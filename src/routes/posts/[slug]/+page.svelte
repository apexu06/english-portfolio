<script lang="ts">
	import CommentForm from '$lib/comment/CommentForm.svelte';
	import CommentItem from '$lib/comment/CommentItem.svelte';

	export let data;
	let articleWidth: number;
</script>

<article
	bind:clientWidth={articleWidth}
	class="prose prose-xl prose-neutral w-full dark:prose-invert"
>
	<div class="not-prose text-foreground">
		<h1>{data.title}</h1>
		<p>{data.date}</p>
	</div>
	<svelte:component this={data.content} />
</article>

<div class="mt-16 flex w-full flex-col items-center gap-2 sm:w-[50rem]">
	<h3>Comments</h3>
	{#if data.comments}
		{#each data.comments as comment}
			<CommentItem {comment} />
		{/each}
	{/if}
	<CommentForm />
</div>
