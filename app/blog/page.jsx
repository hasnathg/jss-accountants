import Image from "next/image";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata = {
  title: "Blog | JSS & Co Accountants",
  description: "Practical guides on accounts, tax, VAT, payroll and running a healthy business.",
};

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 text-center">
          <p className="text-amber-600 font-semibold uppercase tracking-wide">Insights</p>
          <h1 className="section-title text-gray-950">Blog</h1>
          <p className="mt-3 text-gray-600">Simple, actionable posts for owners and finance leads.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="bg-white border border-black/5 shadow overflow-hidden [border-radius:2rem_0_2rem_0] flex flex-col"
            >
              {p.cover ? (
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image src={p.cover} alt="" fill className="object-cover" />
                </div>
              ) : null}

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-wide text-gray-500">{formatDate(p.date)}</p>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h2>
                <p className="mt-2 text-gray-600">{p.excerpt}</p>

                <div className="mt-4">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-2 text-amber-700 hover:underline"
                  >
                    Read more
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
