import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  // Kids are cruel and I love minors - Michael Jackson
  const intro = await import(`./${'introduction'}.md`);
  return {
    content: intro.default,
  };
};
