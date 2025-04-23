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
    title: "Astra UI",
    desc: "A sleek and accessible React UI library built for rapid development and beautiful design.",
    link: "https://astraui.me",
    linkTitle: "Visit Astra UI",
  },
  {
    id: "links",
    title: "Links",
    desc: "An open-source, customizable Linktree alternative with a focus on performance and design.",
    link: "https://links.egeuysal.com",
    linkTitle: "Visit Links",
  },
  {
    id: "loaner",
    title: "Loaner",
    desc: "A Swift-powered loan calculator app to help users manage and understand loan payments easily.",
    link: "https://github.com/egeuysall/loaner",
    linkTitle: "View Loaner on GitHub",
  },
];

export default projects;