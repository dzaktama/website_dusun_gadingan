import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "./Icons";

const contactItems = [
  {
    icon: <MapPinIcon size={22} />,
    label: "Alamat",
    value: "Dusun Gadingan, Desa Ngluwar, Kecamatan Ngluwar, Kabupaten Magelang, Jawa Tengah",
    href: "https://maps.google.com/?q=Ngluwar,+Magelang",
    linkText: "Buka di Google Maps",
  },
  {
    icon: <PhoneIcon size={22} />,
    label: "WhatsApp",
    value: "+62 821-2204-8502",
    href: "https://wa.me/6282122048502",
    linkText: "Chat sekarang",
  },
  {
    icon: <MailIcon size={22} />,
    label: "Email",
    value: "kkn149.gadingan@gmail.com",
    href: "mailto:kkn149.gadingan@gmail.com",
    linkText: "Kirim email",
  },
  {
    icon: <ClockIcon size={22} />,
    label: "Jam Respons",
    value: "Senin–Sabtu, 08.00–17.00 WIB",
    href: null,
    linkText: null,
  },
];

export default function LocationSection() {
  return (
    <section
      id="lokasi"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-parkinsans)",
              color: "var(--accent-neon)",
              filter: "brightness(0.85)",
            }}
          >
            Temukan Kami
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Lokasi &amp; Kontak
          </h2>
          <p
            className="text-base text-[var(--text-secondary)] max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Kami berlokasi di Desa Ngluwar, Kecamatan Ngluwar, Kabupaten Magelang —
            mudah diakses dari jalur utama Magelang–Yogyakarta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <iframe
              title="Peta Lokasi Dusun Gadingan, Ngluwar, Magelang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31593.17278254792!2d110.2413!3d-7.5892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8c2c3c3c3c3c%3A0x0!2sNgluwar%2C%20Magelang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1686000000000!5m2!1sid!2sid"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent-neon)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1"
                    style={{ fontFamily: "var(--font-parkinsans)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm text-[var(--text-primary)] leading-relaxed mb-1"
                    style={{ fontFamily: "var(--font-geist)" }}
                  >
                    {item.value}
                  </p>
                  {item.href && item.linkText && (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                      style={{
                        fontFamily: "var(--font-parkinsans)",
                        color: "var(--accent-neon)",
                        filter: "brightness(0.85)",
                      }}
                    >
                      {item.linkText}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
