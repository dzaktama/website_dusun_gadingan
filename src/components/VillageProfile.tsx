import StatCard from "./StatCard";
import { StatCardData } from "@/types";

const stats: StatCardData[] = [
  {
    value: "613",
    label: "Total Penduduk",
    subtext: "316 Laki-laki · 297 Perempuan",
    icon: "👥",
  },
  {
    value: "200",
    label: "Kepala Keluarga",
    subtext: "Tersebar di 4 RT dalam 1 RW",
    icon: "🏠",
  },
  {
    value: "4 RT / 1 RW",
    label: "Struktur Wilayah",
    subtext: "Administrasi dusun yang solid",
    icon: "🗺️",
  },
  {
    value: "KKN 149",
    label: "Sinergi Pemberdayaan",
    subtext: "UPN "Veteran" Yogyakarta 2026",
    icon: "🤝",
  },
];

export default function VillageProfile() {
  return (
    <section
      id="profil"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Mengenal Lebih Dekat
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Sekilas Profil Gadingan
          </h2>
          <p
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Terletak di jalur strategis Magelang–Yogyakarta, Dusun Gadingan adalah
            komunitas agraris yang hangat dan progresif. Dengan lahan pertanian subur
            dan semangat kewirausahaan yang terus tumbuh, dusun ini menjadi contoh
            nyata sinergi antara kearifan lokal dan potensi ekonomi modern.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} data={stat} />
          ))}
        </div>

        {/* Two-column narrative block */}
        <div
          className="rounded-3xl overflow-hidden grid md:grid-cols-2"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* Text block */}
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-4 block"
              style={{
                fontFamily: "var(--font-parkinsans)",
                color: "var(--accent-neon)",
                filter: "brightness(0.85)",
              }}
            >
              Potensi &amp; Keunggulan
            </span>
            <h3
              className="text-2xl sm:text-3xl text-[var(--text-primary)] mb-4 leading-snug"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Dusun Kecil dengan
              <br />
              Potensi Besar
            </h3>
            <p
              className="text-[var(--text-secondary)] leading-relaxed mb-4 text-sm sm:text-base"
              style={{ fontFamily: "var(--font-geist)" }}
            >
              Dusun Gadingan berada di Desa Ngluwar, Kecamatan Ngluwar, Kabupaten
              Magelang — kawasan yang dikenal subur dan strategis. Kegiatan
              pertanian menjadi tulang punggung ekonomi warga, berdampingan dengan
              industri rumah tangga makanan ringan yang kian berkembang.
            </p>
            <p
              className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base"
              style={{ fontFamily: "var(--font-geist)" }}
            >
              Melalui program KKN Bela Negara 84 UPN "Veteran" Yogyakarta oleh
              Kelompok 149 "Sinergi Gadingan", potensi UMKM lokal kini hadir
              secara digital, membuka akses pasar yang lebih luas bagi produk-produk
              otentik buatan tangan warga Gadingan.
            </p>
          </div>

          {/* Highlight card block */}
          <div
            className="p-8 sm:p-10 flex flex-col justify-center gap-4"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            {[
              {
                icon: "🌾",
                title: "Pertanian Subur",
                desc: "Lahan agraris produktif sebagai fondasi ekonomi dusun",
              },
              {
                icon: "🏪",
                title: "UMKM Aktif",
                desc: "Industri rumah tangga makanan ringan khas Gadingan",
              },
              {
                icon: "📍",
                title: "Lokasi Strategis",
                desc: "Akses mudah via jalur utama Magelang–Yogyakarta",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ backgroundColor: "var(--bg-card)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-[var(--text-primary)] mb-0.5"
                    style={{ fontFamily: "var(--font-parkinsans)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs text-[var(--text-secondary)] leading-relaxed"
                    style={{ fontFamily: "var(--font-geist)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
