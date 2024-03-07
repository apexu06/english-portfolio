import type { Author } from '@prisma/client';
import { get } from 'svelte/store';

export const checkLogin = async (key: string) => {
  const response = await fetch(`/api/author/${key}`);
  const author = (await response.json()) as Author | null;

  return author;
};
