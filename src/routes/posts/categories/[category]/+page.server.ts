import type { Post } from '$lib/types/post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/posts?category=${category}`);
	const posts: Post[] = await response.json();

	return {
		posts,
		category,
	};
};
