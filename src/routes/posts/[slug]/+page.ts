import type { Comment } from '@prisma/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch, data }) => {
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
    authorId: data.authorId,
  } as {
    title: string;
    date: string;
    categories: string[];
    description: string;
    comments: Comment[];
    content: any;
    authorId: string;
  };
};
