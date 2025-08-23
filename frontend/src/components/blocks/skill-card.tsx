import { Card, CardHeader, CardContent } from '../ui/card';
import type { Skill } from '@/types/types';

export const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
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
