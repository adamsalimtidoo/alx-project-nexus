import type { NextApiRequest, NextApiResponse } from "next";
import { jobStore } from "@/lib/store";
import { CreateJobPayload } from "@/types/job";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const q = typeof req.query.q === "string" ? req.query.q : undefined;
    const page = typeof req.query.page === "string" ? parseInt(req.query.page, 10) : undefined;
    const pageSize =
      typeof req.query.pageSize === "string" ? parseInt(req.query.pageSize, 10) : undefined;
    const result = jobStore.list({ q, page, pageSize });
    return res.status(200).json(result);
  }

  if (req.method === "POST") {
    const payload = req.body as CreateJobPayload;
    if (!payload?.title || !payload?.company || !payload?.location || !payload?.type) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const job = jobStore.create(payload);
    return res.status(201).json(job);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end("Method Not Allowed");
}


