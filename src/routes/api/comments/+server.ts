import { deleteComment, getCommentsFromPost } from '$lib/utils/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const postName = url.searchParams.get('postName') ?? '';
	const comments = await getCommentsFromPost(postName);
	return json(comments);
};

export const DELETE: RequestHandler = async ({ url }) => {
	const commentId = url.searchParams.get('id') ?? '';
	const comment = await deleteComment(commentId);
	return json(comment);
};
