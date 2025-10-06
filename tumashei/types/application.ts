export type Application = {
  id: string;
  jobId: string;
  name: string;
  email: string;
  resumeUrl?: string;
  coverLetter?: string;
  createdAt: string;
};

export type CreateApplicationPayload = Omit<Application, "id" | "createdAt">;


