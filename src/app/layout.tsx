import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FenixFuz | Digitaliser. Automatiser. Performer.",
  description:
    "FenixFuz aide les organisations à transformer leurs défis opérationnels en ERP, applications métier, automatisations IA et solutions cloud performantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
