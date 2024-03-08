<script lang="ts">
  import PostGrid from '$lib/components/post/PostGrid.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.category}</title>
</svelte:head>

<PostGrid posts={data.posts} category={data.category} />
