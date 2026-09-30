'use server';

import { getBlogPosts } from '@/lib/blogs';

export async function loadMorePosts(page: number, categoryId?: number, tagId?: number, search?: string) {
  const { posts } = await getBlogPosts({
    page,
    categoryId,
    tagId,
    search,
  });
  return { posts };
}
