import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/categories');
	const categories: string[] = await response.json();

	return {
		categories,
	};
};
