<script lang="ts">
	import CommentForm from '$lib/components/comment/CommentForm.svelte';
	import CommentItem from '$lib/components/comment/CommentItem.svelte';
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
		<div class="mb-8 h-[2px] w-full rounded-full bg-gray-500"></div>
	</div>
	<svelte:component this={data.content} />
</article>

<div class="mt-16 flex w-full flex-col items-center gap-4 sm:w-[50rem]">
	<h2>Comments</h2>
	{#if data.comments}
		{#each comments as comment (comment.id)}
			<div animate:flip={{ duration: 200 }} class="w-full">
				<CommentItem {comment} />
			</div>
		{/each}
	{/if}
	<CommentForm />
</div>
