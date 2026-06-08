import Image from "next/image";
import Link from "next/link";

import { getFeaturedWriting } from "@/lib/writing";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedWriting(3);

  return (
    <div className="container-narrow py-14 sm:py-20">
      <section className="grid gap-10 md:grid-cols-[1fr_220px] md:items-start">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Jose Navarro
          </h1>
          <p className="mt-6 max-w-reading text-lg leading-relaxed text-muted">
            Customer Success leader exploring the intersection of AI, work,
            technology, and human behavior.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:jose@example.com">Email</a>
            <Link href="/writing">Writing</Link>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[220px]">
          <Image
            src="/headshot1.png"
            alt="Professional headshot placeholder"
            width={220}
            height={260}
            priority
            className="h-auto w-full border border-line bg-white object-cover"
          />
        </figure>
      </section>

      <section className="mt-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured essays</h2>
          <Link href="/writing" className="text-sm">
            View all
          </Link>
        </div>

        <div className="space-y-8">
          {featured.map((post) => (
            <article key={post.slug} className="border-b border-line pb-8">
              <p className="text-sm text-muted">
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h3 className="mt-2 text-xl font-medium leading-snug">
                <Link href={`/writing/${post.slug}`} className="no-underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 max-w-reading text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
