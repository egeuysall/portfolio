// app/page.tsx
import Project from './components/Project';

export default function HomePage() {
  return (
    <main className="p-6 space-y-6">
      <Project 
        name="Timora" 
        desc="A Pomodoro productivity app." 
        tags={["React", "Next.js", "Tailwind CSS"]} 
      />
      <Project 
        name="Peak" 
        desc="An all-in-one productivity tool." 
        tags={["AI", "SaaS", "Automation"]} 
      />
    </main>
  );
}