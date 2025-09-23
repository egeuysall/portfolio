export type Skill = {
  icon: React.ReactNode;
  name: string;
  experience: string;
  description: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  cover_link?: string;
  created_by: string;
  created_at: string;
};
