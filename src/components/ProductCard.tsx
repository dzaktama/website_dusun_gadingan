"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { generateWhatsAppLink, formatRupiah } from "@/lib/utils";
import { useState } from "react";

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const waLink = generateWhatsAppLink(
    product.whatsappNumber,
    product.name,
    product.sellerName,
    product.price
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-card)",
        transition: "box-shadow 0.2s ease",
      }}
    >
      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--bg-secondary)]">
        <Image
          src={imgError ? "/placeholder-product.png" : product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImgError(true)}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              fontFamily: "var(--font-parkinsans)",
              backgroundColor: "rgba(18, 38, 30, 0.75)",
              color: "#d4ff39",
              backdropFilter: "blur(8px)",
            }}
          >
            {product.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Product Name */}
        <h3
          className="text-base font-normal leading-snug text-[var(--text-primary)] line-clamp-2"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2 flex-1"
          style={{ fontFamily: "var(--font-geist)" }}
        >
          {product.description}
        </p>

        {/* Price */}
        <p
          className="text-lg font-semibold text-[var(--text-primary)]"
          style={{ fontFamily: "var(--font-parkinsans)" }}
        >
          {formatRupiah(product.price)}
        </p>

        {/* Seller */}
        <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span style={{ fontFamily: "var(--font-geist)" }}>
            {product.sellerName}
          </span>
        </div>

        {/* WhatsApp CTA */}
        <a
          id={`wa-btn-${product.id}`}
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 hover:opacity-90"
          style={{
            fontFamily: "var(--font-parkinsans)",
            backgroundColor: "#25D366",
            color: "#12261e",
          }}
          aria-label={`Pesan ${product.name} via WhatsApp`}
        >
          <WhatsAppIcon />
          Pesan via WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
