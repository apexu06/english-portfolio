import { fetchAllCategories } from '$lib/utils/posts';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const categories = await fetchAllCategories();
	return json(categories);
};
