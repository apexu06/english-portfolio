<script lang="ts">
	import type { Comment } from '@prisma/client';

	export let comment: Comment;

	let createdAt = new Date(comment.createdAt);
	let updatedAt = new Date(comment.updatedAt);

	function formatDate(date: Date) {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
	}
</script>

<div class="flex h-32 w-full flex-col rounded-md bg-lightBackground p-2">
	<div class="flex gap-2 self-end">
		{#if createdAt.toString() !== updatedAt.toString()}
			<span class="text-gray-500">(Updated: {formatDate(updatedAt)})</span>
		{/if}
		<span class="text-gray-500">{formatDate(createdAt)}</span>
	</div>

	<p>{comment.content}</p>
</div>
