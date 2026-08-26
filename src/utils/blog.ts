import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export function publishedPosts(posts: BlogPost[]) {
  return posts
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
    );
}

export function readingTime(post: BlogPost) {
  const words = post.body?.trim().split(/\s+/).length ?? 0;
  return Math.max(1, Math.ceil(words / 220));
}

export function relatedPosts(current: BlogPost, posts: BlogPost[], limit = 3) {
  return posts
    .filter((post) => post.id !== current.id)
    .map((post) => ({
      post,
      overlap: post.data.tags.filter((tag) => current.data.tags.includes(tag))
        .length,
    }))
    .filter(({ overlap }) => overlap > 0)
    .sort(
      (a, b) =>
        b.overlap - a.overlap ||
        b.post.data.publishedAt.getTime() - a.post.data.publishedAt.getTime(),
    )
    .slice(0, limit)
    .map(({ post }) => post);
}
