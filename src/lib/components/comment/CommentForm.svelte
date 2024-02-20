<script lang="ts">
	import { Minus, Plus } from 'lucide-svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import { fly } from 'svelte/transition';
	import autosize from 'autosize';

	let formOpen = false;

	let commentInput: HTMLTextAreaElement;

	$: commentInput, autosize(commentInput);
</script>

<div class="mb-[200px] flex w-full flex-col items-center justify-center gap-4">
	<button
		on:click={() => (formOpen = !formOpen)}
		class={`group flex h-10 w-full items-center justify-center rounded-md bg-lightBackground transition ${!formOpen ? 'shadow-default hover:shadow-heavy' : 'shadow'} `}
	>
		{#if !formOpen}
			<Plus class="transition group-hover:scale-125" />
		{:else}
			<Minus />
		{/if}
	</button>

	{#if formOpen}
		<form
			method="POST"
			action="?/post"
			class="flex w-full flex-col items-center justify-center gap-4"
			transition:fly={{ y: 100, duration: 300 }}
		>
			<textarea
				class="h-32 w-full rounded-md bg-lightBackground p-2 shadow-default outline-none"
				placeholder="your text goes here"
				name="content"
				minlength="1"
				required
				bind:this={commentInput}
			/>
			<div class="flex w-2/3 gap-2 self-end sm:w-1/3">
				<button
					type="button"
					class="h-10 w-full rounded-md bg-lightBackground shadow transition hover:shadow-default"
					on:click={() => (formOpen = !formOpen)}>Cancel</button
				>

				<Button variant="confirm" class="w-full">Submit</Button>
			</div>
		</form>
	{/if}
</div>
