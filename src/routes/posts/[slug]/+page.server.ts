import { createNewComment } from '$lib/utils/prisma';
import type { Actions } from '@sveltejs/kit';

export const actions = {
  post: async ({ request }) => {
    const data = await request.formData();
    const postName = request.url.split('/')[4].split('?')[0];
    const content = data.get('content')?.toString() ?? '';

    await createNewComment(content, postName);
  },
} satisfies Actions;
