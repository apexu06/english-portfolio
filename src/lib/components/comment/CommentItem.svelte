<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { Comment } from '@prisma/client';
	import { Edit, Trash } from 'lucide-svelte';
	import Button from '../buttons/Button.svelte';
	import autosize from 'autosize';

	export let comment: Comment;

	let createdAt = new Date(comment.createdAt);
	let updatedAt = new Date(comment.updatedAt);
	let updatedContent = comment.content;

	function formatDate(date: Date) {
		let minutes =
			date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
		let hours = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
		let months =
			date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
		let days = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();

		return `${days}/${months}/${date.getFullYear()} ${hours}:${minutes}`;
	}

	async function deleteComment(id: string) {
		await fetch(`/api/comments?id=${id}`, { method: 'DELETE' });
	}

	async function updateComment(id: string, content: string) {
		await fetch(`/api/comments?id=${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ content }),
		});
	}

	let deleteDialog: HTMLDialogElement;
	let editCommentInput: HTMLTextAreaElement;
	let editing = false;

	$: editCommentInput, autosize(editCommentInput);
</script>

<div class="flex h-fit w-full flex-col rounded-md bg-lightBackground p-3 shadow-default">
	{#if !editing}
		<div class="flex items-center justify-between gap-2">
			<div>
				{#if createdAt.toString() !== updatedAt.toString()}
					<span class="text-[18px] text-gray-500">modified: {formatDate(updatedAt)}</span>
				{:else}
					<span class="text-[18px] text-gray-500">{formatDate(createdAt)}</span>
				{/if}
			</div>

			<div class="flex gap-2">
				<button on:click={() => (editing = !editing)}>
					<Edit class="h-5 w-5 text-gray-500 transition hover:text-foreground" />
				</button>
				<button on:click={() => deleteDialog.showModal()}>
					<Trash class="h-5 w-5 text-gray-500 transition hover:text-red-500" />
				</button>
			</div>
		</div>
		<p class="whitespace-pre-line break-words font-atkinson">{comment.content}</p>
	{:else}
		<div class="flex flex-col gap-2">
			<textarea
				class="min-h-fit w-full rounded-md bg-lightBackground outline-none"
				bind:value={updatedContent}
				bind:this={editCommentInput}
			></textarea>
			<div class="mb-2 mt-1 h-[1px] w-full self-center rounded-full bg-gray-500"></div>
			<div class="flex gap-2 self-end">
				<Button variant="cancel" class="px-2" on:click={() => (editing = false)}>Cancel</Button>
				<Button
					variant="confirm"
					class="px-2"
					on:click={async () => {
						await updateComment(comment.id, updatedContent);
						await invalidateAll();
						editing = false;
					}}>Save</Button
				>
			</div>
		</div>
	{/if}
</div>

<dialog
	bind:this={deleteDialog}
	class="rounded-md bg-lightBackground px-4 py-6 backdrop:bg-black backdrop:opacity-60"
>
	<div class="flex max-w-full flex-col gap-4">
		<p>Are you sure you want to delete this comment?</p>
		<div class="flex w-full items-center justify-between">
			<Button variant="cancel" on:click={() => deleteDialog.close()} class="px-2">Cancel</Button>
			<Button
				variant="confirm"
				on:click={async () => {
					await deleteComment(comment.id);
					await invalidateAll();
					deleteDialog.close();
				}}
				class="px-2">Delete</Button
			>
		</div>
	</div>
</dialog>
