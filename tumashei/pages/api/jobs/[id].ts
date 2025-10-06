import type { NextApiRequest, NextApiResponse } from "next";
import { jobStore } from "@/lib/store";
import { UpdateJobPayload } from "@/types/job";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid id" });
  }

  if (req.method === "GET") {
    const job = jobStore.get(id);
    if (!job) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(job);
  }

  if (req.method === "PATCH" || req.method === "PUT") {
    const updates = req.body as UpdateJobPayload;
    const job = jobStore.update(id, updates);
    if (!job) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(job);
  }

  if (req.method === "DELETE") {
    const ok = jobStore.delete(id);
    if (!ok) return res.status(404).json({ error: "Not found" });
    return res.status(204).end();
  }

  res.setHeader("Allow", ["GET", "PATCH", "PUT", "DELETE"]);
  return res.status(405).end("Method Not Allowed");
}


