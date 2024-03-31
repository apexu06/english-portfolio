import type { LocalStorageProps } from '$lib/types/post';
import { writable } from 'svelte/store';

// TODO: actually use local storage
export const pageInfo = writable({
  categorySortOrder: 'name',
  postSortOrder: 'title',
  postView: 'grid',
} as LocalStorageProps);
