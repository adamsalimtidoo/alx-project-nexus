import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createApplication, fetchJob } from "@/lib/api";
import { Job } from "@/types/job";

export default function JobDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const [applying, setApplying] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appCover, setAppCover] = useState("");

  useEffect(() => {
    if (typeof id !== "string") return;
    let ignore = false;
    setLoading(true);
    setError(null);
    fetchJob(id)
      .then((j) => !ignore && setJob(j))
      .catch((e) => !ignore && setError(e.message))
      .finally(() => !ignore && setLoading(false));
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <div className="font-sans">
      <header className="flex items-center justify-between gap-4 mb-6">
        <Link href="/" className="text-blue-600 hover:underline">← Back</Link>
        <h1 className="text-xl font-semibold">Job Details</h1>
        <div />
      </header>
      {loading && <p>Loading…</p>}
      {error && <p className="text-red-600">{error}</p>}
      {job && (
        <article>
          <h2 className="text-2xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.company} • {job.location} • {job.type}</p>
          {job.salaryMin != null && (
            <p className="mt-2 text-gray-700">Salary: {job.salaryMin}{job.salaryMax ? ` - ${job.salaryMax}` : ""}</p>
          )}
          <div className="mt-6 whitespace-pre-wrap">{job.description}</div>
          {job.requirements && job.requirements.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium">Requirements</h3>
              <ul className="list-disc list-inside">
                {job.requirements.map((r, i) => (<li key={i}>{r}</li>))}
              </ul>
            </div>
          )}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium">Responsibilities</h3>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((r, i) => (<li key={i}>{r}</li>))}
              </ul>
            </div>
          )}
          <div className="mt-8">
            {job.applyUrl ? (
              <a href={job.applyUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-black text-white">Apply on company site</a>
            ) : job.contactEmail ? (
              <a href={`mailto:${job.contactEmail}?subject=Application: ${encodeURIComponent(job.title)}`} className="px-4 py-2 rounded-md bg-black text-white">Apply via email</a>
            ) : (
              <button onClick={() => setApplyOpen(true)} className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white">Apply</button>
            )}
          </div>
          {applyOpen && (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!job) return;
                setApplying(true);
                setApplyError(null);
                try {
                  await createApplication({ jobId: job.id, name: appName, email: appEmail, coverLetter: appCover });
                  setApplyOpen(false);
                  setAppName("");
                  setAppEmail("");
                  setAppCover("");
                  alert("Application submitted!");
                } catch (err: any) {
                  setApplyError(err?.message ?? "Failed to apply");
                } finally {
                  setApplying(false);
                }
              }}
              className="mt-6 border rounded-md p-4 space-y-3"
            >
              <h3 className="font-medium">Apply for this job</h3>
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input value={appName} onChange={(e) => setAppName(e.target.value)} required className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" value={appEmail} onChange={(e) => setAppEmail(e.target.value)} required className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Cover letter</label>
                <textarea value={appCover} onChange={(e) => setAppCover(e.target.value)} rows={5} className="w-full border px-3 py-2 rounded" />
              </div>
              {applyError && <p className="text-red-600 text-sm">{applyError}</p>}
              <div className="flex gap-2">
                <button disabled={applying} type="submit" className="px-4 py-2 rounded bg-black text-white disabled:opacity-50">{applying ? "Submitting…" : "Submit"}</button>
                <button type="button" onClick={() => setApplyOpen(false)} className="px-4 py-2 rounded border">Cancel</button>
              </div>
            </form>
          )}
        </article>
      )}
    </div>
  );
}


