import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Pemandangan Dusun Gadingan, sawah hijau dan rumah-rumah tradisional Jawa"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlay — always dark for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white/80 mb-8"
          style={{ fontFamily: "var(--font-parkinsans)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse" />
          Desa Ngluwar · Kabupaten Magelang · Jawa Tengah
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          Menjaga Tradisi,
          <br />
          <span className="italic text-[#d4ff39]">Mendorong Potensi</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-geist)" }}
        >
          Dusun Gadingan adalah komunitas agraris yang progresif di jalur strategis
          Magelang–Yogyakarta. Dengan 613 warga yang bersemangat dan deretan UMKM
          makanan ringan otentik, kami siap memperkenalkan cita rasa lokal kepada dunia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="cta-lihat-umkm"
            href="#umkm"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 hover:scale-105 shadow-lg"
            style={{
              fontFamily: "var(--font-parkinsans)",
              backgroundColor: "#25D366",
              color: "#12261e",
            }}
          >
            Jelajahi Produk UMKM
          </a>
          <a
            id="cta-profil-dusun"
            href="#profil"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider border border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 active:scale-95"
            style={{ fontFamily: "var(--font-parkinsans)" }}
          >
            Pelajari Profil Dusun
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-parkinsans)" }}>
            Gulir ke bawah
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
