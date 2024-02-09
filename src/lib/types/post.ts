export type Metadata = {
	title: string;
	date: string;
	categories: string[];
};

export type Post = {
	metadata: Metadata;
	path: string;
};
