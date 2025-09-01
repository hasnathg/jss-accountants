import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content", "posts");

function stripMd(md = "") {
  return md
    .replace(/```[\s\S]*?```/g, "")          // code blocks
    .replace(/`([^`]+)`/g, "$1")             // inline code
    .replace(/\!\[[^\]]*\]\([^)]+\)/g, "")   // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/[#>*_~\-]+/g, " ")             // md marks
    .replace(/\s+/g, " ")
    .trim();
}

export async function getAllPostSlugs() {
  const files = await fs.readdir(postsDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getAllPostsMeta() {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await fs.readFile(path.join(postsDir, slug + ".md"), "utf8");
      const { data, content } = matter(raw);
      const excerpt =
        data.excerpt || stripMd(content).slice(0, 180) + (content.length > 180 ? "…" : "");
      return {
        slug,
        title: data.title || slug,
        date: data.date || null,
        excerpt,
        cover: data.cover || null,
        tags: data.tags || [],
      };
    })
  );
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug) {
  const raw = await fs.readFile(path.join(postsDir, slug + ".md"), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html, { sanitize: false }).process(content);
  const htmlContent = processed.toString();
  return {
    slug,
    title: data.title || slug,
    date: data.date || null,
    excerpt: data.excerpt || stripMd(content).slice(0, 180),
    cover: data.cover || null,
    tags: data.tags || [],
    html: htmlContent,
  };
}
