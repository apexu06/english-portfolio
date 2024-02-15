import { getCommentsFromPost } from '$lib/utils/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const postName = url.searchParams.get('postName') ?? '';
	const comments = await getCommentsFromPost(postName);
	return json(comments);
};
