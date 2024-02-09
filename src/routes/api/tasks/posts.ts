import type { Metadata, Post } from '$lib/types/post';

export const fetchMarkDownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/portfolio/tasks/*.md') as Record<
		string,
		() => Promise<{ metadata: Metadata }>
	>;
	const posts = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		posts.map(async ([slug, post]) => {
			const { metadata } = await post();
			const path = slug.slice(11);
			return {
				meta: metadata,
				path,
			} as Post;
		}),
	);

	return allPosts;
};
