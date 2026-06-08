import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const writingsDirectory = path.join(process.cwd(), "content/writing");

export type WritingFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
};

export type WritingListItem = WritingFrontmatter & {
  slug: string;
  readingTime: string;
};

export type WritingPost = WritingListItem & {
  contentHtml: string;
};

function getMarkdownFiles() {
  return fs.readdirSync(writingsDirectory).filter((file) => file.endsWith(".md"));
}

function parseDate(date: string) {
  return new Date(date).getTime();
}

export function getAllWriting(): WritingListItem[] {
  const files = getMarkdownFiles();

  return files
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(writingsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = data as WritingFrontmatter;

      return {
        slug,
        ...frontmatter,
        readingTime: readingTime(content).text
      };
    })
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

export function getFeaturedWriting(limit = 3) {
  return getAllWriting()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export async function getWritingBySlug(slug: string): Promise<WritingPost> {
  const fullPath = path.join(writingsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(gfm).use(html).process(content);

  const frontmatter = data as WritingFrontmatter;
  return {
    slug,
    ...frontmatter,
    readingTime: readingTime(content).text,
    contentHtml: processedContent.toString()
  };
}
