interface ProjectProps {
  id: string;
  title: string;
  desc: string;
  link?: string;
  linkTitle?: string;
}

const projects: ProjectProps[] = [
  {
    id: "astra-ui",
    title: "Astra UI ",
    desc: "A beautiful and accessible React UI library designed for speed, flexibility, and great UI/UX systems.",
    link: "https://astraui.me",
  },
  {
    id: "links",
    title: "Links    ",
    desc: "An open-source Linktree alternative built for creators who value performance, design, and control.",
    link: "https://links.egeuysal.com",
  },
  {
    id: "loaner",
    title: "Loaner   ",
    desc: "A Swift-based loan calculator app that helps users track payments and plan finances effortlessly.",
    link: "https://github.com/egeuysall/loaner",
  },
];

export default projects;
