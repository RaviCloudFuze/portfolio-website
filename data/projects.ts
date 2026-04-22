export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "cloud-migrator",
    title: "CloudSync — Multi-Cloud Migrator",
    description:
      "A full-stack tool that orchestrates file migrations across Google Drive, OneDrive, and Dropbox with delta sync, resumable uploads, and live progress streaming.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    stack: ["Next.js", "TypeScript", "Node.js", "Redis", "BullMQ", "AWS S3"],
    github: "https://github.com/ravitejadudipalli/cloudsync",
    demo: "https://cloudsync.raviteja.dev",
    featured: true,
  },
  {
    id: "devboard",
    title: "DevBoard — Realtime Team Kanban",
    description:
      "A collaborative Kanban board with optimistic updates, presence indicators, and CRDT-based conflict resolution powered by Yjs.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    stack: ["React", "Socket.IO", "Yjs", "Express", "PostgreSQL", "Tailwind"],
    github: "https://github.com/ravitejadudipalli/devboard",
    demo: "https://devboard.raviteja.dev",
    featured: true,
  },
  {
    id: "askdocs",
    title: "AskDocs — AI Document Q&A",
    description:
      "Upload PDFs and chat with them. Retrieval-augmented generation pipeline with hybrid search, citation highlighting, and streaming answers.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    stack: ["Next.js", "LangChain", "OpenAI", "pgvector", "Python", "FastAPI"],
    github: "https://github.com/ravitejadudipalli/askdocs",
    demo: "https://askdocs.raviteja.dev",
    featured: true,
  },
  {
    id: "devfolio",
    title: "Devfolio — Portfolio Generator",
    description:
      "CLI + web app that turns a GitHub profile into a deployable portfolio site. Auto-extracts pinned repos, languages, and contribution stats.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    stack: ["Next.js", "Node.js", "GitHub API", "Tailwind", "Vercel"],
    github: "https://github.com/ravitejadudipalli/devfolio",
    demo: "https://devfolio.raviteja.dev",
  },
  {
    id: "algo-visualizer",
    title: "Algo Visualizer",
    description:
      "Interactive visualizations for 20+ algorithms — sorting, pathfinding, graphs — with step-through controls and code panels.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stack: ["React", "TypeScript", "D3.js", "Framer Motion"],
    github: "https://github.com/ravitejadudipalli/algo-visualizer",
    demo: "https://algoviz.raviteja.dev",
  },
  {
    id: "expense-tracker",
    title: "Paisa — Personal Finance",
    description:
      "A privacy-first expense tracker with SMS parsing, category suggestions, and monthly insights. Works fully offline via IndexedDB.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
    stack: ["React Native", "TypeScript", "SQLite", "Expo"],
    github: "https://github.com/ravitejadudipalli/paisa",
  },
];
