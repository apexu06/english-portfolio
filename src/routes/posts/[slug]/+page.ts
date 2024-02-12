import prisma from '$lib/utils/prisma';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const post = await import(`../../../markdown/${params.slug}.md`);
	const { title, date, categories } = post.metadata;

	const response = await fetch(`/api/comments?postName=${title}`);
	const comments = (await response.json()) as Comment[];

	const content = post.default;

	return {
		content,
		title,
		date,
		categories,
		comments,
	};
};
