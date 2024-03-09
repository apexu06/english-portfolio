import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
  const currentRoute = url.pathname;
  return {
    currentRoute,
  };
};
