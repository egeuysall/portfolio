import React from "react";
import Link from "next/link";

// Import skills and projects
import skills from "./skills";
import projects from "./projects";
import blogs from "./blogs";

// Import components
import Card from "@/components/ui/Card";
import Newsletter from "@/components/landing/Newsletter";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";

const Home: React.FC = () => {
  return (
    <main className="flex fl flex-col gap-18">
      <section className="w-full flex flex-col gap-4">
        <aside>
          <h4>Hello, I&apos;m Ege!</h4>
          <h1>I&apos;m an entrepreneur.</h1>
        </aside>
        <p>
          I’m a young entrepreneur building minimalist productivity tools. I
          craft focused software that empowers creators to stay organized,
          efficient, and inspired.
        </p>
        <section className="w-full grid gap-4">
          <Link href="/#explore">
            <button className="btn-2 w-full md:w-auto">Explore my work</button>
          </Link>
          <Link href="/#get-in-touch">
            <button className="btn-1 w-full md:w-auto">Get in touch</button>
          </Link>
        </section>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h2>About me</h2>
        <p>
          I’ve been in love with design, coding, and technology since I was 5. I
          built my first automation shortcuts at 7 and started coding seriously
          at 14. Now at 15, I’m crafting productivity tools that help creators
          focus and do more with less.
        </p>
        <p>
          My journey is driven by curiosity, minimalism, and a passion for
          building tools that make a real impact.
        </p>
        <h3>My skills</h3>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => {
            return (
              <Card
                icon={skill.icon}
                title={skill.title}
                desc={skill.desc}
                key={skill.id}
              />
            );
          })}
        </section>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h3>My projects</h3>
        <section className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <Link href={project.link || "/"} key={project.id}>
                <Card title={project.title} desc={project.desc} />
              </Link>
            );
          })}
        </section>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h2>Stay in the loop</h2>
        <Newsletter />
      </section>
      <section className="w-full flex flex-col gap-4">
        <h2>What I’m Building</h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Link href={blog.link || "/"} key={blog.id}>
              <Card icon={blog.icon} title={blog.title} desc={blog.desc} />
            </Link>
          ))}
        </section>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h2>Testimonials</h2>
        <Testimonials />
      </section>
      <section className="w-full flex flex-col gap-4">
        <h2>Get in touch</h2>
        <Contact />
      </section>
    </main>
  );
};

export default Home;