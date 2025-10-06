import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { fetchJobs } from "@/lib/api";
import { Job } from "@/types/job";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);
    fetchJobs({ q, page, pageSize })
      .then((res) => {
        if (ignore) return;
        setJobs(res.jobs);
        setTotal(res.total);
      })
      .catch((e) => !ignore && setError(e.message))
      .finally(() => !ignore && setLoading(false));
    return () => {
      ignore = true;
    };
  }, [q, page, pageSize]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className={`${geistSans.className} ${geistMono.className}` }>
      <header className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-semibold">Find your next role</h1>
        <Link href="/post" className="px-3 py-2 rounded-md bg-black text-white">Post a job</Link>
      </header>

      <div className="mb-6 flex gap-3">
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
          placeholder="Search title, company, location..."
          className="w-full max-w-xl border px-3 py-2 rounded-md"
        />
      </div>

      {loading && <p className="text-gray-600">Loading jobs…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <ul className="space-y-3">
          {jobs.map((job) => (
            <li key={job.id} className="border rounded-md p-4 flex items-center justify-between hover:shadow-sm transition-shadow">
              <div>
                <Link href={`/jobs/${job.id}`} className="text-lg font-medium hover:underline">
                  {job.title}
                </Link>
                <div className="text-sm text-gray-600">{job.company} • {job.location} • <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs border capitalize">{job.type.replace("-"," ")}</span></div>
              </div>
              <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:underline">View</Link>
            </li>
          ))}
          {jobs.length === 0 && <li className="text-gray-600">No jobs found.</li>}
        </ul>
      )}

      <div className="mt-6 flex items-center gap-2">
        <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
        <span className="text-sm">Page {page} of {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  );
}
