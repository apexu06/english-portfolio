<script>
  import PostGrid from '$lib/components/post/PostGrid.svelte';

  export let data;
</script>

<svelte:head>
  <title>All Posts</title>
</svelte:head>

<PostGrid posts={data.posts} category={'All Posts'} />
