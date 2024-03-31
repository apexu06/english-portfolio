<script lang="ts">
  import PostItem from '$lib/components/post/PostItem.svelte';
  import { pageInfo } from '$lib/stores/localStorageStore';
  import type { Post } from '$lib/types/post';
  import { onMount } from 'svelte';

  export let posts: Post[];
  let loaded: boolean = false;

  onMount(() => {
    loaded = true;
  });

  $: $pageInfo,
    () => {
      if (posts) {
        if ($pageInfo.postSortOrder === 'date') {
          posts = posts.sort(
            (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
          );
        } else if ($pageInfo.postSortOrder === 'title') {
          posts = posts.sort((a, b) => a.metadata.title.localeCompare(b.metadata.title));
        }
      }
    };
</script>

{#if loaded}
  <div
    class={`${$pageInfo.postView === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : ''} mt-[-20px] grid w-full grid-cols-1 gap-4 pb-4 sm:mt-0`}
  >
    {#if posts.length === 0}
      <div class="col-span-full flex justify-center">
        <h2 class="mt-8">No posts found</h2>
      </div>
    {:else}
      {#each posts as post, i}
        <PostItem transitionDelay={(i + 1) * 100} {post} />
      {/each}
    {/if}
  </div>
{/if}
