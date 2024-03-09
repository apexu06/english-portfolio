<script lang="ts">
  import PostGrid from '$lib/components/post/PostGrid.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>All Posts</title>
</svelte:head>

<PostGrid posts={data.posts} category={'All Posts'} />
