'use client';

import { useProjectStatus } from '@/hooks/use-project-status';

export function StatusCard() {
  const { status, setStatus, label } = useProjectStatus();

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-white/50">Project status</p>
          <h2 className="mt-1 text-xl font-semibold">{label}</h2>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/60">
          {status}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {(['idea', 'building', 'ready'] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setStatus(item)}
            className={`rounded-xl px-3 py-2 text-sm capitalize transition ${
              status === item
                ? 'bg-white text-black'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
