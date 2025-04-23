import React from "react";
import Link from "next/link";

// Import skills and projects
import skills from "./skills";
import projects from "./projects";

// Import card component
import Card from "@/components/Card";

const Home: React.FC = () => {
  return (
    <main className="flex fl flex-col gap-18">
      <section className="w-full flex flex-col gap-3">
        <aside>
          <h4>Hello, I&apos;m Ege!</h4>
          <h1>I&apos;m an entrepreneur.</h1>
        </aside>
        <p>
          I’m a young entrepreneur building minimalist productivity tools. I
          craft focused software that empowers creators to stay organized,
          efficient, and inspired.
        </p>
        <section className="w-full grid gap-3">
          <Link href="/#explore">
            <button className="btn-2 w-full md:w-auto">Explore my work</button>
          </Link>
          <Link href="/#get-in-touch">
            <button className="btn-1 w-full md:w-auto">Get in touch</button>
          </Link>
        </section>
      </section>
      <section className="w-full flex flex-col gap-3">
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
      <section className="w-full flex flex-col gap-3">
        <h3>My projects</h3>
        {projects.map((project) => {
          return (
            <Card
              title={project.title}
              linkTitle={project.linkTitle}
              link={project.link}
              desc={project.desc}
              key={project.id}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Home;
