export type Metadata = {
	title: string;
	date: string;
	categories: string[];
};

export type Post = {
	meta: Metadata;
	path: string;
};
