import { useForm } from "react-hook-form";
import { createJob } from "@/lib/api";
import { CreateJobPayload } from "@/types/job";
import { useRouter } from "next/router";

export default function PostJobPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateJobPayload>({
    defaultValues: {
      title: "",
      company: "",
      location: "",
      type: "full-time",
      description: "",
    },
  });

  async function onSubmit(values: CreateJobPayload) {
    const job = await createJob(values);
    router.push(`/jobs/${job.id}`);
  }

  return (
    <div className="font-sans">
      <h1 className="text-2xl font-semibold mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm mb-1">Title</label>
          <input className="w-full border px-3 py-2 rounded" {...register("title", { required: true })} />
          {errors.title && <p className="text-red-600 text-sm">Required</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Company</label>
            <input className="w-full border px-3 py-2 rounded" {...register("company", { required: true })} />
            {errors.company && <p className="text-red-600 text-sm">Required</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Location</label>
            <input className="w-full border px-3 py-2 rounded" {...register("location", { required: true })} />
            {errors.location && <p className="text-red-600 text-sm">Required</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Type</label>
          <select className="w-full border px-3 py-2 rounded" {...register("type", { required: true })}>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
            <option value="temporary">Temporary</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Salary min</label>
            <input type="number" className="w-full border px-3 py-2 rounded" {...register("salaryMin", { valueAsNumber: true })} />
          </div>
          <div>
            <label className="block text-sm mb-1">Salary max</label>
            <input type="number" className="w-full border px-3 py-2 rounded" {...register("salaryMax", { valueAsNumber: true })} />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Apply URL</label>
          <input className="w-full border px-3 py-2 rounded" {...register("applyUrl")} />
        </div>
        <div>
          <label className="block text-sm mb-1">Contact Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded" {...register("contactEmail")} />
        </div>
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea rows={6} className="w-full border px-3 py-2 rounded" {...register("description", { required: true })} />
          {errors.description && <p className="text-red-600 text-sm">Required</p>}
        </div>
        <button disabled={isSubmitting} type="submit" className="px-4 py-2 rounded bg-black text-white disabled:opacity-50">{isSubmitting ? "Posting…" : "Post job"}</button>
      </form>
    </div>
  );
}


