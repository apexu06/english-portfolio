<script lang="ts">
	import type { Post } from '$lib/types/post';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let post: Post;
	export let transitionDelay: number;

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	<div
		class="flex min-h-[150px] w-full flex-col rounded-lg bg-lightBackground p-4 shadow-default transition hover:translate-y-[-5px] hover:shadow-heavy"
		transition:fly={{ y: 100, duration: 200, delay: transitionDelay }}
	>
		<h3 class="truncate font-normal">{post.metadata.title}</h3>
		<span class="mt-2 line-clamp-3 text-[18px] text-gray-500">{post.metadata.description}</span>
		<div class="mt-4 flex items-center justify-between">
			<a href={post.path} class="text-[18px] font-bold text-foreground hover:underline">
				Read more
			</a>
			<span class="text-[18px] text-gray-500">{post.metadata.date}</span>
		</div>
	</div>
{/if}
