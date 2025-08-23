import { FileCode, Code2, Paintbrush2, Database, Hexagon } from 'lucide-react';
import type { Skill } from '@/types/types';

export const skills: Skill[] = [
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
