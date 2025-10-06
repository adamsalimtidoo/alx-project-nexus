import { JobsListResponse, Job, CreateJobPayload, UpdateJobPayload } from "@/types/job";
import { Application, CreateApplicationPayload } from "@/types/application";

const BASE = ""; // same origin

export async function fetchJobs(params?: {
  q?: string;
  page?: number;
  pageSize?: number;
}): Promise<JobsListResponse> {
  const search = new URLSearchParams();
  if (params?.q) search.set("q", params.q);
  if (params?.page) search.set("page", String(params.page));
  if (params?.pageSize) search.set("pageSize", String(params.pageSize));
  const res = await fetch(`${BASE}/api/jobs${search.toString() ? `?${search.toString()}` : ""}`);
  if (!res.ok) throw new Error(`Failed to fetch jobs: ${res.status}`);
  return res.json();
}

export async function fetchJob(id: string): Promise<Job> {
  const res = await fetch(`${BASE}/api/jobs/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch job`);
  return res.json();
}

export async function createJob(payload: CreateJobPayload): Promise<Job> {
  const res = await fetch(`${BASE}/api/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to create job`);
  return res.json();
}

export async function updateJob(id: string, updates: UpdateJobPayload): Promise<Job> {
  const res = await fetch(`${BASE}/api/jobs/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error(`Failed to update job`);
  return res.json();
}

export async function deleteJob(id: string): Promise<void> {
  const res = await fetch(`${BASE}/api/jobs/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`Failed to delete job`);
}

export async function createApplication(payload: CreateApplicationPayload): Promise<Application> {
  const res = await fetch(`${BASE}/api/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to submit application`);
  return res.json();
}


