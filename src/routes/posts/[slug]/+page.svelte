<script lang="ts">
	import CommentForm from '$lib/comment/CommentForm.svelte';
	import CommentItem from '$lib/comment/CommentItem.svelte';
	import type { Comment } from '@prisma/client';
	import { flip } from 'svelte/animate';

	export let data;
	let comments: Comment[] = [];

	$: data,
		(() => {
			comments = data.comments.sort((a, b) => {
				let aDate = new Date(a.createdAt);
				let bDate = new Date(b.createdAt);
				return aDate > bDate ? -1 : 1;
			});
		})();
</script>

<article class="prose prose-xl prose-neutral w-full dark:prose-invert">
	<div class="not-prose text-foreground">
		<h1>{data.title}</h1>
		<p>{data.date}</p>
	</div>
	<svelte:component this={data.content} />
</article>

<div class="mt-16 flex w-full flex-col items-center gap-4 sm:w-[50rem]">
	<h3>Comments</h3>
	{#if comments.length > 0}
		{#each comments as comment (comment.id)}
			<div animate:flip={{ duration: 200 }} class="w-full">
				<CommentItem {comment} />
			</div>
		{/each}
	{/if}
	<CommentForm />
</div>
