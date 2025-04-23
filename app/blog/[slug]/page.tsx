import blogs from "@/app/blogs";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-sm opacity-70 mb-4">
        {blog.icon}
        <span>{blog.publishedAt}</span>
      </div>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg opacity-80 mb-6">{blog.desc}</p>
      {blog.link && blog.linkTitle && (
        <a
          href={blog.link}
          className="underline text-blue-600 dark:text-blue-400"
        >
          {blog.linkTitle}
        </a>
      )}
    </main>
  );
}
