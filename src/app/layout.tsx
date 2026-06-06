import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "BOSS Sticker Kutoarjo | Stiker & Aksesoris Kendaraan Premium",
  description:
    "Pusat stiker, skotlet, cutting sticker, variasi kendaraan, dan aksesoris motor premium di Kutoarjo, Purworejo, Jawa Tengah. Buka Senin–Minggu 08.00–20.00.",
  keywords: [
    "stiker kutoarjo",
    "cutting sticker kutoarjo",
    "skotlet motor kutoarjo",
    "boss sticker",
    "aksesoris motor purworejo",
    "variasi kendaraan kutoarjo",
    "sticker custom purworejo",
  ],
  authors: [{ name: "BOSS Sticker Kutoarjo" }],
  openGraph: {
    title: "BOSS Sticker Kutoarjo | Stiker & Aksesoris Kendaraan Premium",
    description:
      "Pusat stiker, skotlet, cutting sticker, variasi kendaraan, dan aksesoris motor premium di Kutoarjo.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased scan-effect">{children}</body>
    </html>
  );
}
