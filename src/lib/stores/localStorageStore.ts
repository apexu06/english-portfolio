import type { LocalStorageProps } from '$lib/types/post';
import { writable } from 'svelte/store';

// TODO: actually use local storage
export const pageInfo = writable({
  categorySortOrder: 'name',
  postSortOrder: 'date',
  postView: 'grid',
} as LocalStorageProps);
