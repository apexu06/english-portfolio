import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';
import { authorKey, authorLoggedIn } from '$lib/stores/localStorageStore';

export const load: LayoutLoad = async ({ url }) => {
  if (get(authorKey)) {
    authorLoggedIn.set(true);
  }

  const currentRoute = url.pathname;
  return {
    currentRoute,
  };
};
