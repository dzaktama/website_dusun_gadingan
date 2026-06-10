import { TikTokIcon, YouTubeIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

const socialLinks = [
  {
    name: "TikTok",
    handle: "@gadinganpro",
    url: "https://www.tiktok.com/@gadinganpro",
    icon: <TikTokIcon size={18} />,
  },
  {
    name: "YouTube",
    handle: "@gadinganpro2424",
    url: "https://www.youtube.com/@gadinganpro2424",
    icon: <YouTubeIcon size={18} />,
  },
  {
    name: "Instagram",
    handle: "@gadinganpro_",
    url: "https://www.instagram.com/gadinganpro_",
    icon: <InstagramIcon size={18} />,
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
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
              { href: "#sosmed", label: "Media Sosial" },
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

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1"
              style={{ fontFamily: "var(--font-parkinsans)" }}
            >
              Sosial Media
            </p>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-geist)" }}
              >
                <span style={{ color: "var(--text-muted)" }}>{social.icon}</span>
                {social.handle}
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
              <WhatsAppIcon size={14} />
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
