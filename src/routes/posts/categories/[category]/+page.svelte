<script lang="ts">
	import PostGrid from '$lib/post/PostGrid.svelte';

	export let data;
</script>

<PostGrid posts={data.posts} category={data.category} />
