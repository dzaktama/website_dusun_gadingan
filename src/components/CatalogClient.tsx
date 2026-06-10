"use client";

import { useState, useMemo } from "react";
import { Product } from "@/types";
import { SearchIcon } from "./Icons";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

interface CatalogClientProps {
  products: Product[];
}

const CATEGORIES = ["Semua", "Makanan Ringan"];

export default function CatalogClient({ products }: CatalogClientProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.sellerName.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        activeCategory === "Semua" || p.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [products, search, activeCategory]);

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        {/* Search Input */}
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            id="catalog-search"
            type="search"
            placeholder="Cari produk atau nama penjual..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              fontFamily: "var(--font-geist)",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
            }}
            aria-label="Cari produk UMKM"
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer"
              style={{
                fontFamily: "var(--font-parkinsans)",
                backgroundColor:
                  activeCategory === cat
                    ? "var(--accent-neon)"
                    : "var(--bg-card)",
                color:
                  activeCategory === cat
                    ? "#12261e"
                    : "var(--text-secondary)",
                border: "1px solid var(--border-subtle)",
              }}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p
        className="text-xs text-[var(--text-muted)] mb-6"
        style={{ fontFamily: "var(--font-geist)" }}
      >
        Menampilkan{" "}
        <span className="font-semibold text-[var(--text-primary)]">
          {filtered.length}
        </span>{" "}
        produk
        {search && (
          <>
            {" "}untuk{" "}
            <span className="font-semibold text-[var(--text-primary)]">
              &ldquo;{search}&rdquo;
            </span>
          </>
        )}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4" style={{ color: "var(--text-muted)" }}>
            <SearchIcon size={56} strokeWidth={1.2} />
          </div>
          <h3
            className="text-xl text-[var(--text-primary)] mb-2"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Produk tidak ditemukan
          </h3>
          <p
            className="text-sm text-[var(--text-secondary)] max-w-xs"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
          </p>
          <button
            onClick={() => { setSearch(""); setActiveCategory("Semua"); }}
            className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
            style={{
              fontFamily: "var(--font-parkinsans)",
              backgroundColor: "var(--accent-neon)",
              color: "#12261e",
            }}
          >
            Reset Pencarian
          </button>
        </div>
      )}

      {/* Skeleton placeholder shown when no products at all — fallback */}
      {products.length === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
