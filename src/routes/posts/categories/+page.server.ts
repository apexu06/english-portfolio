import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/categories');
	const categories: { name: string; count: number }[] = await response.json();

	return {
		categories,
	};
};
