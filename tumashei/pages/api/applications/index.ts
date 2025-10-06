import type { NextApiRequest, NextApiResponse } from "next";
import { applicationStore, jobStore } from "@/lib/store";
import { CreateApplicationPayload } from "@/types/application";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const jobId = typeof req.query.jobId === "string" ? req.query.jobId : undefined;
    if (!jobId) return res.status(400).json({ error: "jobId is required" });
    const list = applicationStore.listByJob(jobId);
    return res.status(200).json({ applications: list });
  }

  if (req.method === "POST") {
    const payload = req.body as CreateApplicationPayload;
    if (!payload?.jobId || !payload?.name || !payload?.email) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!jobStore.get(payload.jobId)) {
      return res.status(404).json({ error: "Job not found" });
    }
    const app = applicationStore.create(payload);
    return res.status(201).json(app);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end("Method Not Allowed");
}


