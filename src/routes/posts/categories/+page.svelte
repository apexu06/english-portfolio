<script lang="ts">
	import { goto } from '$app/navigation';
	import CategorySortButtons from '$lib/CategorySortButtons.svelte';
	import { pageInfo } from '$lib/stores/localStorageStore';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	export let data;
	$: $pageInfo.categorySort,
		(() => {
			if ($pageInfo.categorySort === 'count' && data.categories) {
				data.categories.sort((a, b) => b.count - a.count);
			} else if ($pageInfo.categorySort === 'name' && data.categories) {
				data.categories.sort((a, b) => a.name.localeCompare(b.name));
			}
		})();

	let isLoaded = false;
	onMount(() => (isLoaded = true));
</script>

{#if isLoaded}
	<div class="flex h-full w-2/3 flex-col items-center gap-4">
		<h1
			transition:fly={{ y: -100, duration: 200, delay: 300 }}
			class="gradientText h-[70px] text-[60px]"
		>
			Categories
		</h1>
		<div
			class="flex w-[98%] items-center justify-between pl-1"
			transition:fly={{ x: -100, duration: 200, delay: 400 }}
		>
			<span><b>Sort by:</b> </span>
			<CategorySortButtons />
		</div>
		<div
			class="flex h-3/4 w-full flex-col items-center gap-3 overflow-y-scroll"
			transition:fly={{ x: 200, duration: 200, delay: 500 }}
		>
			{#each data.categories as category (category.name)}
				<button
					animate:flip={{ duration: 250 }}
					on:click={() => goto('/posts/categories/' + category.name)}
					class="flex h-20 min-h-20 min-w-[98%] items-center justify-between bg-lightBackground px-8 capitalize shadow-default transition hover:bg-foreground hover:text-lightBackground"
				>
					<span>{category.name}</span>
					<span>{`${category.count} ${category.count === 1 ? 'Post' : 'Posts'}`}</span>
				</button>
			{/each}
		</div>
	</div>
{/if}
