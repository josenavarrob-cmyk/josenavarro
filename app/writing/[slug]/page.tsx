import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { formatDate } from "@/lib/utils";
import { getAllWriting, getWritingBySlug } from "@/lib/writing";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllWriting().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllWriting().find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date
    },
    alternates: {
      canonical: `/writing/${slug}`
    }
  };
}

export default async function WritingPostPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const allPosts = getAllWriting();
  const exists = allPosts.some((item) => item.slug === slug);

  if (!exists) {
    notFound();
  }

  const post = await getWritingBySlug(slug);

  return (
    <div className="container-narrow py-14 sm:py-20">
      <article className="mx-auto max-w-reading">
        <header className="border-b border-line pb-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {formatDate(post.date)} · {post.readingTime}
          </p>
        </header>

        <div
          className="prose prose-neutral mt-10 max-w-none prose-headings:tracking-tight prose-blockquote:border-l-2 prose-blockquote:border-line prose-blockquote:pl-6 prose-blockquote:italic prose-a:text-ink"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  );
}
