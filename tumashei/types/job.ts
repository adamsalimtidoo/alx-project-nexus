export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship" | "temporary" | "freelance";
  salaryMin?: number;
  salaryMax?: number;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  applyUrl?: string;
  contactEmail?: string;
};

export type CreateJobPayload = Omit<Job, "id" | "createdAt" | "updatedAt">;

export type UpdateJobPayload = Partial<CreateJobPayload>;

export type JobsListResponse = {
  jobs: Job[];
  total: number;
  page: number;
  pageSize: number;
};


