import { Button } from '@/components/ui/button';
import React from 'react';
import { FileCode, Code2, Paintbrush2, Database, Hexagon } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
    const res = await fetch('https://blogapi.egeuysal.com/v1/blogs?limit=3', {
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

// BlogCard component
const BlogCard: React.FC<{ blog: any }> = ({ blog }) => (
  <div className="flex flex-col gap-sm border-none">
    {blog.cover_link && (
      <img
        src={blog.cover_link}
        alt={blog.title}
        className="w-full h-64 rounded-md aspect-video object-cover"
      />
    )}
    <div className="flex flex-col gap-3xs">
      <span className="font-semibold text-neutral-900 dark:text-neutral-100">{blog.title}</span>
      <span className="text-small text-neutral-500">
        By {blog.created_by} &bull; {new Date(blog.created_at).toLocaleDateString()}
      </span>
    </div>
  </div>
);

const RepoCard: React.FC<{ repo: any }> = ({ repo }) => (
  <Card className="flex flex-col gap-xs">
    <CardHeader>
      <div className="flex items-center justify-between">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="font-semibold">
          {repo.name}
        </a>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 text-small flex-1">
        {repo.description ? (
          repo.description
        ) : (
          <span className="text-neutral-500">No description</span>
        )}
      </p>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between pt-sm">
        <div className="flex gap-2 items-center text-xs text-neutral-500">
          {repo.language && (
            <span className="flex items-center gap-2xs">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  repo.language === 'TypeScript'
                    ? 'bg-primary-700'
                    : repo.language === 'Go'
                    ? 'bg-primary-300'
                    : 'bg-error-700'
                }`}
              />
              {repo.language}
            </span>
          )}
        </div>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-small">
          View Repo
        </a>
      </div>
    </CardContent>
  </Card>
);

type Skill = {
  icon: React.ReactNode;
  name: string;
  experience: string;
  description: string;
};

const skills: Skill[] = [
  {
    icon: <FileCode />,
    name: 'Next.js',
    experience: '1 year',
    description:
      'Built production-grade web apps and APIs, leveraging SSR and API routes for scalable projects.',
  },
  {
    icon: <Code2 />,
    name: 'TypeScript',
    experience: '1 year',
    description:
      'Migrated large codebases to TypeScript, improving safety and maintainability across all projects.',
  },
  {
    icon: <Paintbrush2 />,
    name: 'Tailwind CSS',
    experience: '1 year',
    description:
      'Designed custom UI systems and rapidly prototyped interfaces using Tailwind utility classes.',
  },
  {
    icon: <Hexagon />,
    name: 'Golang',
    experience: '4 months',
    description:
      'Developed performant backend services and REST APIs, focusing on concurrency and reliability.',
  },
  {
    icon: <Database />,
    name: 'PostgreSQL',
    experience: '4 months',
    description:
      'Implemented complex queries, migrations, and optimized schemas for scalable storage.',
  },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <Card className="w-full flex flex-col h-full gap-sm">
    <CardHeader>
      <div className="flex flex-col gap-3xs">
        <p>{skill.icon}</p>
        <span className="font-semibold text-neutral-900 dark:text-neutral-100">{skill.name}</span>
        <span className="text-xs text-neutral-500">{skill.experience} experience</span>
      </div>
    </CardHeader>
    <CardContent className="flex-1 flex items-end">
      <p className="text-sm text-neutral-700 dark:text-neutral-300">{skill.description}</p>
    </CardContent>
  </Card>
);

const Landing: React.FC = async () => {
  const repos = await fetchLatestRepos();
  const blogs = await fetchLatestBlogs();

  return (
    <main className="flex flex-col gap-18">
      {/* Hero Section */}
      <section className="w-full flex flex-col gap-md">
        <div>
          <h1>Hi, I'm Ege. A builder.</h1>
          <p className="text-neutral-700 dark:text-neutral-300">
            I'm passionate about building meaningful experiences through design and code.
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
          {repos.map((repo: any) => (
            <li key={repo.id} className="m-0 p-0 ">
              <RepoCard repo={repo} />
            </li>
          ))}
        </ul>
      </section>
      <section id="about" className="w-full flex flex-col gap-md">
        <h4>About Me</h4>
        <ul className="list-disc pl-3">
          <li>I'm a full-stack developer and designer based in Chicago, United States.</li>
          <li>I love building web apps with Next.js, Go, and PostgreSQL.</li>
          <li>I'm passionate about UI/UX, accessibility, and performance.</li>
          <li>I enjoy learning new technologies and sharing what I know.</li>
          <li>Outside of building, I enjoy calisthenics and photography.</li>
        </ul>
      </section>
      <section id="skills" className="w-full flex flex-col gap-md">
        <h4>My Skills</h4>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-md">
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
            <li className="text-neutral-500">No blog posts found.</li>
          ) : (
            blogs.map((blog: any) => (
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
