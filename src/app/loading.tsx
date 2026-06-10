import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Navbar placeholder */}
      <div
        className="h-16 border-b"
        style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-subtle)" }}
      />

      {/* Hero placeholder */}
      <div
        className="w-full h-[85vh] animate-pulse"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      />

      {/* Catalog section placeholder */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div
            className="h-4 w-32 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--border-subtle)" }}
          />
          <div
            className="h-8 w-64 rounded-xl animate-pulse"
            style={{ backgroundColor: "var(--border-subtle)" }}
          />
          <div
            className="h-4 w-80 rounded animate-pulse"
            style={{ backgroundColor: "var(--border-subtle)" }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
