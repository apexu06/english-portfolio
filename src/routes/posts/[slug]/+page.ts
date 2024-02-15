import type { Comment } from '@prisma/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const post = await import(`../../../markdown/${params.slug}.md`);
	const { title, date, description, categories } = post.metadata;

	const response = await fetch(`/api/comments?postName=${params.slug}`);
	const comments = (await response.json()) as Comment[];

	const content = post.default;

	return {
		content,
		title,
		date,
		categories,
		description,
		comments,
	};
};
