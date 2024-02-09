import type { Post } from '$lib/types/post';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/tasks?category=${category}`);
	const posts: Post[] = await response.json();

	return {
		posts,
		category,
	};
};
