export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3 max-w-sm text-center md:text-left">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: "var(--accent-neon)", color: "#12261e" }}
              >
                G
              </div>
              <span
                className="text-lg text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Dusun Gadingan
              </span>
            </div>
            <p
              className="text-xs text-[var(--text-muted)] leading-relaxed"
              style={{ fontFamily: "var(--font-geist)" }}
            >
              Desa Ngluwar, Kecamatan Ngluwar,
              <br />
              Kabupaten Magelang, Jawa Tengah.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1"
              style={{ fontFamily: "var(--font-parkinsans)" }}
            >
              Navigasi
            </p>
            {[
              { href: "#hero", label: "Beranda" },
              { href: "#profil", label: "Profil Dusun" },
              { href: "#umkm", label: "Katalog UMKM" },
              { href: "#lokasi", label: "Lokasi & Kontak" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-geist)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Quick */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1"
              style={{ fontFamily: "var(--font-parkinsans)" }}
            >
              Kontak Cepat
            </p>
            <a
              href="https://wa.me/6282122048502"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{
                fontFamily: "var(--font-parkinsans)",
                backgroundColor: "#25D366",
                color: "#12261e",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Kami
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        />

        {/* Attribution & Copyright */}
        <div className="flex flex-col gap-3 text-center">
          <p
            className="text-xs text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Website Profil &amp; Katalog UMKM ini dikembangkan oleh{" "}
            <span className="font-semibold text-[var(--text-secondary)]">
              Kelompok KKN 149 &ldquo;Sinergi Gadingan&rdquo; UPN &ldquo;Veteran&rdquo; Yogyakarta 2026
            </span>
            . Dosen Pembimbing Lapangan:{" "}
            <span className="font-semibold text-[var(--text-secondary)]">
              Sigit Tripambudi, M.Si.
            </span>
          </p>
          <p
            className="text-xs text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            &copy; {currentYear} Dusun Gadingan. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
