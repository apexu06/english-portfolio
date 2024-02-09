import type { Post } from '$lib/types/post';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/tasks');
	const posts: Post[] = await response.json();
	return {
		posts,
	};
};
