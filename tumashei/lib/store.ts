import { Job } from "@/types/job";
import { Application } from "@/types/application";

// In-memory store for MVP. In production, replace with a database.
const jobs: Job[] = [];
const applications: Application[] = [];

function generateId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export const jobStore = {
  list(params?: { q?: string; page?: number; pageSize?: number }) {
    const query = (params?.q ?? "").trim().toLowerCase();
    const page = params?.page && params.page > 0 ? params.page : 1;
    const pageSize = params?.pageSize && params.pageSize > 0 ? params.pageSize : 10;
    const filtered = query
      ? jobs.filter((j) =>
          [j.title, j.company, j.location, j.description]
            .filter(Boolean)
            .some((f) => f.toLowerCase().includes(query)),
        )
      : jobs;
    const total = filtered.length;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return { jobs: filtered.slice(start, end), total, page, pageSize };
  },

  get(id: string) {
    return jobs.find((j) => j.id === id) ?? null;
  },

  create(payload: Omit<Job, "id" | "createdAt" | "updatedAt">): Job {
    const now = new Date().toISOString();
    const job: Job = { id: generateId(), createdAt: now, updatedAt: now, ...payload };
    jobs.unshift(job);
    return job;
  },

  update(id: string, updates: Partial<Omit<Job, "id" | "createdAt" | "updatedAt">>): Job | null {
    const idx = jobs.findIndex((j) => j.id === id);
    if (idx === -1) return null;
    const next: Job = { ...jobs[idx], ...updates, updatedAt: new Date().toISOString() };
    jobs[idx] = next;
    return next;
  },

  delete(id: string): boolean {
    const idx = jobs.findIndex((j) => j.id === id);
    if (idx === -1) return false;
    jobs.splice(idx, 1);
    return true;
  },
};

export const applicationStore = {
  listByJob(jobId: string) {
    return applications.filter((a) => a.jobId === jobId);
  },
  create(payload: Omit<Application, "id" | "createdAt">): Application {
    const now = new Date().toISOString();
    const app: Application = { id: generateId(), createdAt: now, ...payload };
    applications.unshift(app);
    return app;
  },
};

// Seed data for a nicer first-run experience
jobStore.create({
  title: "Frontend Engineer",
  company: "Acme Corp",
  location: "Remote",
  type: "full-time",
  salaryMin: 90000,
  salaryMax: 130000,
  description: "Build delightful web UIs with React and TypeScript.",
  requirements: ["3+ years React", "TypeScript", "CSS-in-JS"],
  responsibilities: ["Ship features", "Write tests", "Code review"],
  applyUrl: "https://example.com/jobs/frontend",
  contactEmail: "jobs@acme.co",
});

jobStore.create({
  title: "Backend Developer",
  company: "Globex",
  location: "Nairobi, KE",
  type: "contract",
  salaryMin: 4000,
  salaryMax: 6000,
  description: "Design and implement scalable APIs with Node.js.",
  requirements: ["Node.js", "PostgreSQL", "Docker"],
  responsibilities: ["Design APIs", "Optimize queries", "Maintain CI"],
  contactEmail: "careers@globex.dev",
});


