import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await import(`/src/markdown/${params.slug}.md`);
	const { title, date, categories } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		categories,
	};
};
