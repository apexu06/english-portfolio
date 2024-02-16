<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { Comment } from '@prisma/client';
	import { Edit, Trash } from 'lucide-svelte';

	export let comment: Comment;

	let createdAt = new Date(comment.createdAt);
	let updatedAt = new Date(comment.updatedAt);
	let updatedContent = comment.content;

	function formatDate(date: Date) {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
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
	let editing = false;
</script>

<div class="flex h-fit w-full flex-col rounded-md bg-lightBackground p-2 shadow-default">
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
				class="h-32 w-full rounded-md bg-lightBackground p-2 outline-none"
				bind:value={updatedContent}
			></textarea>
			<div class="flex gap-2 self-end">
				<button
					class="rounded-md border-2 border-foreground p-2 text-base text-foreground shadow-default transition hover:bg-foreground hover:text-lightBackground hover:shadow-heavy"
					on:click={async () => {
						await updateComment(comment.id, updatedContent);
						await invalidateAll();
						editing = false;
					}}
				>
					<b>Save</b>
				</button>
				<button
					class="rounded-md p-2 text-foreground hover:underline"
					on:click={() => (editing = false)}
				>
					<b>Cancel</b>
				</button>
			</div>
		</div>
	{/if}
</div>

<dialog
	bind:this={deleteDialog}
	class="rounded-md bg-lightBackground p-8 shadow-heavy backdrop:bg-black backdrop:opacity-60"
>
	<div class="flex max-w-full flex-col gap-4">
		<p>Are you sure you want to delete this comment?</p>
		<div class="flex w-full items-center justify-between">
			<button class="p-2 hover:underline" on:click={() => deleteDialog.close()}>Cancel</button>
			<button
				class="rounded-md bg-red-500 p-2 text-white shadow-default transition hover:shadow-heavy"
				on:click={async () => {
					await deleteComment(comment.id);
					await invalidateAll();
					deleteDialog.close();
				}}><b>Delete</b></button
			>
		</div>
	</div>
</dialog>
