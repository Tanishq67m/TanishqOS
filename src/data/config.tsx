import { Folder, Code, Globe, Terminal, Mail, Settings } from 'lucide-react';

export const APPS = {
  finder: {
    id: 'finder',
    title: 'Finder - About Me',
    icon: Folder,
    color: 'bg-blue-500',
  },
  vscode: {
    id: 'vscode',
    title: 'VS Code - Projects',
    icon: Code,
    color: 'bg-blue-600',
  },
  safari: {
    id: 'safari',
    title: 'Safari - Value & Blogs',
    icon: Globe,
    color: 'bg-blue-400',
  },
  terminal: {
    id: 'terminal',
    title: 'Terminal - Skills',
    icon: Terminal,
    color: 'bg-gray-800',
  },
  mail: {
    id: 'mail',
    title: 'Mail - Contact',
    icon: Mail,
    color: 'bg-green-500',
  },
  settings: {
    id: 'settings',
    title: 'System Preferences',
    icon: Settings,
    color: 'bg-gray-500',
  }
};

// "Story-based" Project Data
export const PROJECTS = [
  {
    id: 1,
    name: "screen-recorder.tsx",
    title: "Async Video Tool",
    description: "Built a lightweight desktop app to solve the 'bloated software' problem. It uses Bunny.net for instant streaming, reducing team update friction by 40%.",
    stack: ["Next.js", "Postgres", "Tailwind", "Electron"],
    link: "#",
    repo: "#"
  },
  {
    id: 2,
    name: "ai-summarizer.tsx",
    title: "AI Knowledge Base",
    description: "Leveraged OpenAI and Vector DBs to democratize research. Allows users to 'chat' with dense PDFs, saving hours of manual reading.",
    stack: ["Next.js", "OpenAI", "Pinecone", "Tailwind"],
    link: "#",
    repo: "#"
  }
];