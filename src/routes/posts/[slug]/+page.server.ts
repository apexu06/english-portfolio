import { createNewComment, getAuthorByKey } from '$lib/utils/prisma';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ cookies }) => {
  const author = cookies.get('author');
  return {
    authorId: author,
  };
};

export const actions = {
  post: async ({ request, cookies }) => {
    const data = await request.formData();
    const postName = request.url.split('/')[4].split('?')[0];
    const content = data.get('content')?.toString() ?? '';

    const author = cookies.get('author');
    if (!author) {
      error(401, 'You must be logged in to comment');
    }

    await createNewComment(content, postName, author);
  },

  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const key = data.get('key')?.toString() ?? '';

    const author = await getAuthorByKey(key);
    if (!author) {
      return { error: true, message: 'Invalid key' };
    }
    cookies.set('author', author.id, { path: '' });
  },
} satisfies Actions;
