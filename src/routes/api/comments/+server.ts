import prisma from '$lib/utils/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const postName = url.searchParams.get('postName') ?? '';
	const comments = await prisma.comment.findMany({ where: { postName: postName } });
	return json(comments);
};
