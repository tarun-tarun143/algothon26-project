import { StatusCard } from '@/components/status-card';
import { env } from '@/lib/env';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
            Algoxilla · ALGOTHON’26
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Build the idea. Ship the solution.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
            A clean Next.js starter you can adapt to the official hackathon challenge.
            Replace this page with your real product once the case requirements are finalized.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/50">Starter app</p>
            <h2 className="mt-2 text-2xl font-semibold">{env.appName}</h2>
            <div className="mt-6 space-y-4 text-sm text-white/65">
              <p>✅ Next.js App Router + TypeScript</p>
              <p>✅ Tailwind CSS v4</p>
              <p>✅ API health endpoint</p>
              <p>✅ Environment variable template</p>
              <p>✅ Basic component, hook and type structure</p>
            </div>
          </section>

          <StatusCard />
        </div>

        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
          <p>Health check: <code>/api/health</code></p>
          <p className="mt-2">Replace the starter UI with your hackathon solution.</p>
        </footer>
      </div>
    </main>
  );
}
