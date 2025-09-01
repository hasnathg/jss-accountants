import Image from "next/image";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="section">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-xs uppercase tracking-wide text-gray-500">{formatDate(post.date)}</p>
        <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">{post.title}</h1>

        {post.cover ? (
          <div className="relative w-full aspect-[16/9] mt-6 overflow-hidden [border-radius:2rem_0_2rem_0] shadow">
            <Image src={post.cover} alt="" fill className="object-cover" priority />
          </div>
        ) : null}

        <div className="blog-content mt-6" dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className="mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-amber-700 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    </article>
  );
}
