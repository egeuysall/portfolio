import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
import { BlogCard } from '@/components/blocks/blog-card';
import { RepoCard } from '@/components/blocks/repo-card';
import { SkillCard } from '@/components/blocks/skill-card';
import { skills } from '@/lib/skills';
import type { GitHubRepo, Blog } from '@/types/types';

// Fetch latest GitHub repos
async function fetchLatestRepos() {
  try {
    const res = await fetch(
      'https://api.github.com/users/egeuysall/repos?sort=created&direction=desc&per_page=6',
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error(`Error Status Code: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error('Failed to fetch repos:', err);
    return [];
  }
}

// Fetch latest blog posts
async function fetchLatestBlogs() {
  try {
    const res = await fetch('https://blogapi.egeuysal.com:8443/v1/blogs?limit=3', {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Error Status Code: ${res.status}`);
    }

    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('Failed to fetch blogs:', err);
    return [];
  }
}

const Landing: React.FC = async () => {
  const repos = await fetchLatestRepos();
  const blogs = await fetchLatestBlogs();

  return (
    <main className="flex flex-col gap-18">
      {/* Hero Section */}
      <section className="w-full flex flex-col gap-md">
        <div>
          <h1>
            Hi, I&apos;m Ege. <br /> A builder.
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300">
            I&apos;m passionate about building meaningful experiences through design and code.
          </p>
        </div>
        <div className="flex gap-sm">
          <Link href="mailto:hi@egeuysal.com">
            <Button>Contact me</Button>
          </Link>
          <Link href="#work">
            <Button variant="outline">See my work</Button>
          </Link>
        </div>
      </section>

      {/* Latest GitHub Repos Section */}
      <section id="work" className="w-full flex flex-col gap-md">
        <h4>Latest Projects</h4>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
          {repos.map((repo: GitHubRepo) => (
            <li key={repo.id} className="m-0 p-0 ">
              <RepoCard repo={repo} />
            </li>
          ))}
        </ul>
      </section>
      <section id="about" className="w-full flex flex-col gap-md">
        <h4>About Me</h4>
        <ul className="list-disc pl-6">
          <li>I&apos;m a full-stack developer and designer based in Chicago, United States.</li>
          <li>I love building web apps with Next.js, Go, and PostgreSQL.</li>
          <li>I&apos;m passionate about UI/UX, accessibility, and performance.</li>
          <li>I enjoy learning new technologies and sharing what I know.</li>
          <li>Outside of building, I enjoy calisthenics and photography.</li>
        </ul>
      </section>
      <section id="skills" className="w-full flex flex-col gap-md">
        <h4>My Skills</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {skills.map((skill) => (
            <li key={skill.name} className="w-full">
              <SkillCard skill={skill} />
            </li>
          ))}
        </ul>
      </section>
      <section id="blog" className="w-full flex flex-col gap-md">
        <h4>My Blog</h4>
        <ul className="grid lg:grid-cols-3 gap-xl">
          {blogs.length === 0 ? (
            <li className="text-neutral-500 text-small">No blog posts found.</li>
          ) : (
            blogs.map((blog: Blog) => (
              <li key={blog.id}>
                <a
                  href={`https://www.blog.egeuysal.com/${blog.slug}`}
                  className="hover:no-underline hover:opacity-75 transition-opacity ease-in-out"
                >
                  <BlogCard blog={blog} />
                </a>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
};

export default Landing;
