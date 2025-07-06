import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draupnir Design System",
  description: "Componentes, tokens e guidelines para interfaces modernas.",
  openGraph: {
    title: "Draupnir Design System",
    description: "Componentes, tokens e guidelines para interfaces modernas.",
    url: "https://seu-ds.com",
    siteName: "Draupnir Design System",
    images: [
      {
        url: "/draupnir-og.png",
        width: 1200,
        height: 630,
        alt: "Draupnir Design System",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draupnir Design System",
    description: "Componentes, tokens e guidelines para interfaces modernas.",
    images: ["/draupnir-og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Draupnir Design System",
            "url": "https://seu-ds.com",
            "description": "Componentes, tokens e guidelines para interfaces modernas."
          })
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
