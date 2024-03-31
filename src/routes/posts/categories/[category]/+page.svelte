<script lang="ts">
  import PostGrid from '$lib/components/post/PostGrid.svelte';
  import { onMount } from 'svelte';
  import type { Post } from '$lib/types/post';
  import { fly } from 'svelte/transition';
  import { Grid2X2Icon, Grid3X3Icon, GridIcon, ListIcon, SearchIcon } from 'lucide-svelte';
  import Button from '$lib/components/buttons/Button.svelte';
  import { pageInfo } from '$lib/stores/localStorageStore';

  export let data;

  let filteredPosts: Post[];
  let search = '';

  $: {
    if (data.posts) {
      filteredPosts = data.posts.filter((post) =>
        post.metadata.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
  }
</script>

<svelte:head>
  <title>{data.category}</title>
</svelte:head>

<div class="flex w-full flex-col">
  <h1
    class="col-span-full mb-4 font-playfair font-normal"
    transition:fly={{ y: -100, duration: 200, delay: 200 }}
  >
    {#if data.category !== 'All Posts'}
      Category:
    {/if}
    <b class="font-atkinson">{data.category}</b>
  </h1>

  <div class="mb-8 flex items-center justify-between gap-2 sm:mb-4">
    <div class="flex w-full flex-row items-center shadow sm:w-96">
      <div class="flex size-9 items-center justify-center rounded-l-md bg-lightBackground">
        <SearchIcon class="size-6" />
      </div>
      <input
        type="text"
        class="w-full justify-self-center rounded-r-md p-1 outline-none"
        bind:value={search}
      />
    </div>

    <div class="flex gap-2">
      <button
        class={`${$pageInfo.postView === 'grid' ? 'bg-lightBackground shadow-default' : ''} h-fit rounded-md p-1 transition`}
        on:click={() => ($pageInfo.postView = 'grid')}><Grid2X2Icon class="size-8" /></button
      >

      <button
        class={`${$pageInfo.postView === 'list' ? 'bg-lightBackground shadow-default' : ''} h-fit rounded-md p-1 transition`}
        on:click={() => ($pageInfo.postView = 'list')}><ListIcon class="size-8" /></button
      >
    </div>
  </div>

  <PostGrid posts={filteredPosts} />
</div>
