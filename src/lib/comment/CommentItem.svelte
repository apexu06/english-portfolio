<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { Comment } from '@prisma/client';
	import { Edit, Trash } from 'lucide-svelte';

	export let comment: Comment;

	let createdAt = new Date(comment.createdAt);
	let updatedAt = new Date(comment.updatedAt);

	function formatDate(date: Date) {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
	}

	async function deleteComment(id: string) {
		await fetch(`/api/comments?id=${id}`, { method: 'DELETE' });
	}

	let deleteDialog: HTMLDialogElement;
</script>

<div class="flex h-fit w-full flex-col rounded-md bg-lightBackground p-2 shadow-default">
	<div class="flex items-center justify-between gap-2">
		{#if createdAt.toString() !== updatedAt.toString()}
			<span class="text-[18px] text-gray-500">(Updated: {formatDate(updatedAt)})</span>
		{/if}
		<span class="text-[18px] text-gray-500">{formatDate(createdAt)}</span>

		<div class="flex gap-2">
			<button>
				<Edit class="h-5 w-5 text-gray-500 transition hover:text-foreground" />
			</button>
			<button on:click={() => deleteDialog.showModal()}>
				<Trash class="h-5 w-5 text-gray-500 transition hover:text-red-500" />
			</button>
		</div>
	</div>
	<p class="whitespace-pre-line break-words font-atkinson">{comment.content}</p>
</div>

<dialog
	bind:this={deleteDialog}
	class="rounded-md bg-lightBackground p-8 shadow-heavy backdrop:bg-black backdrop:opacity-60"
>
	<div class="flex max-w-full flex-col gap-4">
		<p>Are you sure you want to delete this comment?</p>
		<div class="flex w-full items-center justify-between">
			<button class="p-2 underline" on:click={() => deleteDialog.close()}>Cancel</button>
			<button
				class="rounded-md bg-red-500 p-2 text-white shadow-default transition hover:shadow-heavy"
				on:click={async () => {
					await deleteComment(comment.id);
					deleteDialog.close();
					await invalidateAll();
				}}><b>Delete</b></button
			>
		</div>
	</div>
</dialog>
