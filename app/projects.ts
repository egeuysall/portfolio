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
    id: "spot",
    title: "Spot",
    desc: "An AI-powered event discovery tool built for speed, simplicity, and truly personal recommendations.",
    link: "https://www.spot.egeuysal.com",
  },
];

export default projects;
