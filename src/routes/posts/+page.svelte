<script lang="ts">
  import PostGrid from '$lib/components/post/PostGrid.svelte';
  import { pageInfo } from '$lib/stores/localStorageStore';
  import { Grid2X2Icon, ListIcon, SearchIcon } from 'lucide-svelte';
  import type { PageData } from './$types';
  import { fly } from 'svelte/transition';
  import type { Post } from '$lib/types/post';

  export let data: PageData;

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
  <title>All Posts</title>
</svelte:head>

<div class="flex w-full flex-col">
  <h1
    class="col-span-full mb-4 font-playfair font-normal"
    transition:fly={{ y: -100, duration: 200, delay: 200 }}
  >
    <b class="font-atkinson">All Posts</b>
  </h1>

  <div class="mb-8 flex items-center justify-between gap-2 sm:mb-4">
    <div class="flex w-full flex-row items-center shadow sm:w-96">
      <div class="flex size-9 items-center justify-center rounded-l-md bg-lightBackground">
        <SearchIcon class="size-6" />
      </div>
      <input
        type="text"
        class="w-full justify-self-center rounded-r-md bg-lightBackground p-1 outline-none"
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
