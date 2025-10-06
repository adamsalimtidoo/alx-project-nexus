import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur z-10">
        <div className="mx-auto w-full max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500">Tumashei</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm hover:underline">Home</Link>
            <Link href="/post" className="text-sm hover:underline">Post a job</Link>
            <Link href="/signin" className="text-sm px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white">Sign in</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
          {children}
        </div>
      </main>
      <footer className="border-t">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Tumashei
        </div>
      </footer>
    </div>
  );
}


