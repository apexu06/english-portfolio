<script lang="ts">
  import PostItem from '$lib/components/post/PostItem.svelte';
  import type { Post } from '$lib/types/post';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  export let posts: Post[];
  export let category: string;
  let loaded: boolean = false;

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <div
    class="mt-[-20px] grid w-full grid-cols-1 gap-4 pb-4 sm:mt-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <h1
      class="col-span-full mb-8 font-playfair font-normal"
      transition:fly={{ y: -100, duration: 200, delay: 200 }}
    >
      {#if category !== 'All Posts'}
        Category:
      {/if}
      <b class="font-atkinson">{category}</b>
    </h1>
    {#each posts as post, i}
      <PostItem transitionDelay={(i + 1) * 100 + 200} {post} />
    {/each}
  </div>
{/if}
