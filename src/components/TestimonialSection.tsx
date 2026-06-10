"use client";

import { useState } from "react";
import { QuoteIcon, UserIcon } from "./Icons";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Dengan adanya katalog digital ini, produk keripik saya yang tadinya hanya dikenal se-dusun, sekarang sudah dipesan dari luar kota. Alhamdulillah, pendapatan meningkat signifikan.",
    name: "Bu Sari Wulandari",
    role: "Pengusaha Keripik Pisang",
  },
  {
    id: "t2",
    quote:
      "Gadingan itu dusun kecil tapi luar biasa. Warganya kompak, gotong royong masih kental, dan semangat wirausahanya tinggi. Saya bangga menjadi bagian dari komunitas ini.",
    name: "Pak Haryono",
    role: "Pengusaha Slondok",
  },
  {
    id: "t3",
    quote:
      "Program KKN dari UPN Veteran Yogyakarta ini sangat membantu kami untuk go digital. Website ini adalah bukti nyata sinergi antara akademisi dan masyarakat.",
    name: "Bapak Dukuh Gadingan",
    role: "Kepala Dusun Gadingan",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimoni"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-parkinsans)",
              color: "var(--accent-neon)",
              filter: "brightness(0.85)",
            }}
          >
            Suara Warga
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Apa Kata Mereka
          </h2>
        </div>

        {/* Quote Card */}
        <div
          className="relative rounded-3xl p-8 sm:p-12"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* Quote icon */}
          <div
            className="absolute -top-5 left-8 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "var(--accent-neon)", color: "#12261e" }}
          >
            <QuoteIcon size={20} strokeWidth={2.2} />
          </div>

          {/* Quote text */}
          <blockquote className="mt-4 mb-8">
            <p
              className="text-lg sm:text-xl text-[var(--text-primary)] leading-relaxed italic"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent-neon)" }}
            >
              <UserIcon size={20} />
            </div>
            <div>
              <p
                className="text-sm font-semibold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-parkinsans)" }}
              >
                {testimonials[active].name}
              </p>
              <p
                className="text-xs text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-geist)" }}
              >
                {testimonials[active].role}
              </p>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                aria-label={`Testimonial dari ${t.name}`}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor:
                    i === active ? "var(--accent-neon)" : "var(--border-subtle)",
                  transform: i === active ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
