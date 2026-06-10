import { Product } from "@/types";
import { mockProducts } from "@/lib/mock-data";
import CatalogClient from "./CatalogClient";

const API_URL = process.env.NEXT_PUBLIC_GAS_API_URL ?? "";

async function fetchProducts(): Promise<Product[]> {
  // If no API URL is configured, fall back to mock data
  if (!API_URL) {
    return mockProducts;
  }

  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    // Google Apps Script returns { data: [...] }
    const data: Product[] = Array.isArray(json.data)
      ? json.data
      : Array.isArray(json)
      ? json
      : mockProducts;

    return data.length > 0 ? data : mockProducts;
  } catch {
    // On error, gracefully fall back to mock data
    return mockProducts;
  }
}

export default async function CatalogSection() {
  const products = await fetchProducts();

  return (
    <section
      id="umkm"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-parkinsans)",
              color: "var(--accent-neon)",
              filter: "brightness(0.85)",
            }}
          >
            Produk Lokal Pilihan
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Katalog UMKM Dusun Gadingan
          </h2>
          <p
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Mencicipi Kelezatan Otentik Produk Makanan Ringan Khas Gadingan —
            Buatan Warga Lokal dengan Cinta.
          </p>
        </div>

        {/* Client Component: Search + Filter + Product Grid */}
        <CatalogClient products={products} />

        {/* Bottom CTA note */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span
            className="text-sm text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Ingin mendaftarkan produk UMKM Anda?
          </span>
          <a
            href="https://wa.me/6282122048502?text=Halo%2C%20saya%20ingin%20mendaftarkan%20produk%20UMKM%20ke%20Katalog%20Dusun%20Gadingan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-parkinsans)",
              color: "var(--accent-neon)",
              filter: "brightness(0.85)",
            }}
          >
            Hubungi kami via WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
