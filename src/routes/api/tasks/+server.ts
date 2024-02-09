import { json } from '@sveltejs/kit';
import { fetchMarkDownPosts } from './posts';

export const GET = async () => {
	const posts = await fetchMarkDownPosts();
	return json(posts);
};
