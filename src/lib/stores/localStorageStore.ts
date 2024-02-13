import type { LocalStorageProps } from '$lib/types/post';
import { writable } from 'svelte/store';

// TODO: actually use local storage
export const pageInfo = writable({
	categorySort: 'name',
} as LocalStorageProps);