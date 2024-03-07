import type { LocalStorageProps } from '$lib/types/post';
import { persisted } from 'svelte-persisted-store';
import { writable } from 'svelte/store';

// TODO: actually use local storage
export const pageInfo = writable({
  categorySortOrder: 'name',
  postSortOrder: 'date',
} as LocalStorageProps);

export const authorKey = persisted('authorKey', undefined as string | undefined);

export const authorLoggedIn = writable(false);
