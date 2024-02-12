export type Metadata = {
	title: string;
	date: string;
	categories: string[];
};

export type Post = {
	metadata: Metadata;
	path: string;
};

export type Comment = {
	id: string;
	createdAt: Date;
	content: string;
	postName: string;
};

export type LocalStorageProps = {
	categorySort: 'name' | 'count';
};
