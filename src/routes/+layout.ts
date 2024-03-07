import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';
import { authorLoggedIn, authorKey } from '$lib/stores/localStorageStore';
import type { Author } from '@prisma/client';

export const load: LayoutLoad = async ({ url, fetch }) => {
  let key = get(authorKey);

  if (key === undefined) {
    authorLoggedIn.set(false);
  } else {
    const response = await fetch(`/api/author?key=${key}`);
    const data = (await response.json()) as Author;
    if (data === null) {
      authorLoggedIn.set(false);
      authorKey.set(undefined);
    } else {
      authorLoggedIn.set(true);
    }
  }

  const currentRoute = url.pathname;
  return {
    currentRoute,
  };
};
