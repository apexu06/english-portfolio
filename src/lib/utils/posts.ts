import type { Metadata, Post } from '$lib/types/post';

export const fetchMarkDownPosts = async (category: string | null) => {
	const allPostFiles = import.meta.glob('$markdown/*.md') as Record<
		string,
		() => Promise<{ metadata: Metadata }>
	>;
	const posts = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		posts.map(async ([slug, post]) => {
			const { metadata } = await post();
			const path =
				'/portfolio/posts/' +
				slug
					.split('/')
					.pop()
					?.substring(0, slug.length - 17);
			return {
				metadata: metadata,
				path,
			} as Post;
		}),
	);

	const filteredPosts = allPosts.filter((post) => {
		if (category) {
			return post.metadata.categories.includes(category);
		}
		return true;
	});

	return filteredPosts;
};

export const fetchAllCategories = async () => {
	const allPostFiles = import.meta.glob('$markdown/*.md') as Record<
		string,
		() => Promise<{ metadata: Metadata }>
	>;
	const posts = Object.entries(allPostFiles);

	const allPostCategories = await Promise.all(
		posts.map(async ([_, post]) => {
			const { metadata } = await post();

			return metadata.categories;
		}),
	);

	const counts: Map<string, number> = new Map();

	allPostCategories.flat().forEach((item) => {
		counts.set(item, (counts.get(item) || 0) + 1);
	});

	return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
};
