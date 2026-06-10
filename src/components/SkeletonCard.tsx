export default function SkeletonCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Image skeleton */}
      <div
        className="w-full aspect-[4/3] animate-pulse"
        style={{ backgroundColor: "var(--border-subtle)" }}
      />

      {/* Content skeleton */}
      <div className="p-4 flex flex-col gap-3">
        {/* Category badge */}
        <div
          className="h-5 w-24 rounded-full animate-pulse"
          style={{ backgroundColor: "var(--border-subtle)" }}
        />
        {/* Title */}
        <div
          className="h-5 w-3/4 rounded-lg animate-pulse"
          style={{ backgroundColor: "var(--border-subtle)" }}
        />
        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <div
            className="h-3.5 w-full rounded animate-pulse"
            style={{ backgroundColor: "var(--border-subtle)" }}
          />
          <div
            className="h-3.5 w-5/6 rounded animate-pulse"
            style={{ backgroundColor: "var(--border-subtle)" }}
          />
        </div>
        {/* Price */}
        <div
          className="h-6 w-28 rounded-lg animate-pulse"
          style={{ backgroundColor: "var(--border-subtle)" }}
        />
        {/* Seller */}
        <div
          className="h-4 w-36 rounded animate-pulse"
          style={{ backgroundColor: "var(--border-subtle)" }}
        />
        {/* Button */}
        <div
          className="h-11 w-full rounded-xl animate-pulse mt-1"
          style={{ backgroundColor: "var(--border-subtle)" }}
        />
      </div>
    </div>
  );
}
