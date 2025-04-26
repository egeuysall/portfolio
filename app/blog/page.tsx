import React from "react";
import blogs from "../blogs";
import Card from "@/components/ui/Card";
import Link from "next/link";

const Blog: React.FC = () => {
  return (
    <main className="w-full flex flex-col gap-4">
      <h2>Blog Posts</h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Link href={blog.link || "/"} key={blog.id}>
            <Card icon={blog.icon} title={blog.title} desc={blog.desc} />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Blog;
