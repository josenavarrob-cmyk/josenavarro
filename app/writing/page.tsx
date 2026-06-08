import type { Metadata } from "next";
import Link from "next/link";

import { formatDate } from "@/lib/utils";
import { getAllWriting } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays by Jose Navarro on AI, technology, work, and society in reverse chronological order."
};

export default function WritingPage() {
  const posts = getAllWriting();

  return (
    <div className="container-narrow py-14 sm:py-20">
      <header className="max-w-reading">
        <h1 className="text-4xl font-semibold tracking-tight">Writing</h1>
        <p className="mt-4 text-muted">
          Notes on work, technology, behavior, and the institutions around us.
        </p>
        <p className="mt-4 text-sm text-muted">
          The articles listed below are placeholder samples, not published
          writing.
        </p>
      </header>

      <div className="mt-12 space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-line pb-8">
            <p className="text-sm text-muted">
              {formatDate(post.date)} · {post.readingTime}
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-tight">
              <Link href={`/writing/${post.slug}`} className="no-underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-reading text-muted">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={`${post.slug}-${tag}`}
                  className="rounded-sm border border-line px-2 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
