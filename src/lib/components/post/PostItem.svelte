<script lang="ts">
  import { pageInfo } from '$lib/stores/localStorageStore';
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
    class={`${$pageInfo.postView === 'grid' ? 'min-h-[160px] flex-col rounded-lg hover:translate-y-[-5px]' : 'min-h-[60px] items-center rounded-md hover:translate-x-[5px]'} flex w-full justify-between  bg-lightBackground p-4 shadow-default transition hover:shadow-heavy`}
    transition:fly={{ y: 100, duration: 200, delay: transitionDelay }}
  >
    {#if $pageInfo.postView === 'grid'}
      <div>
        <h3 class="truncate font-normal">{post.metadata.title}</h3>
        <span class="mt-2 line-clamp-3 text-[18px] text-gray-500">{post.metadata.description}</span>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <a href={post.path} class="text-[18px] font-bold text-foreground hover:underline">
          Read more
        </a>
        <span class="text-[18px] text-gray-500">{post.metadata.date}</span>
      </div>
    {:else}
      <h3 class="w-48 truncate font-normal sm:w-fit">{post.metadata.title}</h3>

      <div class="flex items-center justify-between gap-4">
        <span
          class="hidden truncate text-left text-[18px] text-gray-500 md:flex md:w-[200px] lg:w-[400px] xl:w-[600px]"
          >{post.metadata.description}</span
        >
        <span class="hidden text-[18px] text-gray-500 sm:flex">{post.metadata.date}</span>

        <a href={post.path} class="truncate text-[18px] font-bold text-foreground hover:underline">
          Read more
        </a>
      </div>
    {/if}
  </div>
{/if}
