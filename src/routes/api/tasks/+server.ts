import { json, type RequestHandler } from '@sveltejs/kit';
import { fetchMarkDownPosts } from '$lib/utils/posts';

export const GET: RequestHandler = async ({ url }) => {
	let category = url.searchParams.get('category');

	const posts = await fetchMarkDownPosts(category);
	return json(posts);
};
