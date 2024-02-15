export type Metadata = {
	title: string;
	date: string;
	description: string;
	categories: string[];
};

export type Post = {
	metadata: Metadata;
	path: string;
};

export type LocalStorageProps = {
	categorySortOrder: 'name' | 'count';
};
