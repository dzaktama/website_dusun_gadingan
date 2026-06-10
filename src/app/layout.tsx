import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { instrumentSerif, geist, parkinsans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dusun Gadingan — Profil Desa & Katalog UMKM",
  description:
    "Website resmi Dusun Gadingan, Desa Ngluwar, Kecamatan Ngluwar, Kabupaten Magelang. Temukan produk UMKM makanan ringan khas buatan warga lokal dan profil lengkap dusun kami.",
  keywords: [
    "Dusun Gadingan",
    "Ngluwar",
    "Magelang",
    "UMKM",
    "makanan ringan",
    "keripik",
    "slondok",
    "rempeyek",
  ],
  openGraph: {
    title: "Dusun Gadingan — Profil Desa & Katalog UMKM",
    description:
      "Temukan produk UMKM makanan ringan khas buatan warga Dusun Gadingan, Magelang, Jawa Tengah.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${instrumentSerif.variable} ${geist.variable} ${parkinsans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
