<script>
	import PostGrid from '$lib/post/PostGrid.svelte';

	export let data;
</script>

<PostGrid posts={data.posts} category={'All Posts'} />
