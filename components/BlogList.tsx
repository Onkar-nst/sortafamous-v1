'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type BlogPost } from '@/lib/blogs';
import { loadMorePosts } from '@/app/actions';

export function BlogList({
  initialPosts,
  totalPages,
  categoryId,
  tagId,
  search,
}: {
  initialPosts: BlogPost[];
  totalPages: number;
  categoryId?: number;
  tagId?: number;
  search?: string;
}) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (page >= totalPages || loading) return;
    setLoading(true);
    try {
      const nextPage = page + 1;
      const { posts: newPosts } = await loadMorePosts(nextPage, categoryId, tagId, search);
      setPosts((prev) => [...prev, ...newPosts]);
      setPage(nextPage);
    } catch (error) {
      console.error('Failed to load more posts', error);
    } finally {
      setLoading(false);
    }
  };

  if (posts.length === 0) {
    return <p className="text-ink-soft text-lg">No posts found.</p>;
  }

  return (
    <>
      <div className="grid gap-x-6 gap-y-12 grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="group flex flex-col gap-4">
            <Link href={`/${post.slug}`} className="block overflow-hidden rounded-2xl aspect-[16/9] bg-muted relative">
              {post.featuredImageUrl ? (
                <img
                  src={post.featuredImageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-ink/5" />
              )}
            </Link>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-xs text-ink-soft">
                {post.categories?.[0] && (
                  <span className="rounded-full bg-ink/[0.06] px-3 py-1">
                    {post.categories[0].name}
                  </span>
                )}
                <span>{post.formattedDate}</span>
              </div>
              <Link href={`/${post.slug}`}>
                <h2 className="serif text-2xl leading-tight group-hover:text-ink-soft transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-ink-soft line-clamp-3 text-sm mt-1">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      {page < totalPages && (
        <div className="mt-20 flex justify-center pb-16">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="rounded-full border border-ink/20 px-8 py-3 text-sm transition hover:border-ink hover:bg-ink hover:text-cream disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
}
