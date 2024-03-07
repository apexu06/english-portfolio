import { authorKey } from '$lib/stores/localStorageStore';
import { createNewComment, getAuthorByKey } from '$lib/utils/prisma';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { Actions } from './$types';

export const actions = {
  post: async ({ request }) => {
    const data = await request.formData();
    const postName = request.url.split('/')[4].split('?')[0];
    const content = data.get('content')?.toString() ?? '';

    const author = get(authorKey);
    if (!author) {
      error(401, 'You must be logged in to comment');
    }

    await createNewComment(content, postName, author);
  },

  login: async ({ request }) => {
    const data = await request.formData();
    const key = data.get('key')?.toString() ?? '';

    const author = await getAuthorByKey(key);
    if (!author) {
      return { error: true, message: 'Invalid key' };
    }

    return { success: true, id: author.id };
  },
} satisfies Actions;
