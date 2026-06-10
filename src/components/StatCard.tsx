import { StatCardData } from "@/types";

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 rounded-2xl text-center transition-transform duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Icon */}
      <div
        className="text-3xl mb-3 leading-none"
        role="img"
        aria-label={data.label}
      >
        {data.icon}
      </div>

      {/* Value */}
      <p
        className="text-3xl sm:text-4xl font-normal text-[var(--text-primary)] leading-none mb-1"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        {data.value}
      </p>

      {/* Label */}
      <p
        className="text-sm font-semibold text-[var(--text-primary)] mt-2 uppercase tracking-wider"
        style={{ fontFamily: "var(--font-parkinsans)" }}
      >
        {data.label}
      </p>

      {/* Subtext */}
      <p
        className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed"
        style={{ fontFamily: "var(--font-geist)" }}
      >
        {data.subtext}
      </p>
    </div>
  );
}
