import fs from "fs";
import matter from "gray-matter";
import { isArray } from "lodash";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";
import glob from "tiny-glob";

const postsDirectory = join(process.cwd(), "pages/markdown");

async function getPostSlugs() {
  return glob("**/*.md", {
    cwd: postsDirectory,
  });
}

export function getPostBySlug(
  rawSlug: string | string[],
  fields: readonly string[] = []
) {
  const slug = isArray(rawSlug) ? rawSlug.join("/") : rawSlug;
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts(fields: readonly string[] = []) {
  const slugs = await getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
