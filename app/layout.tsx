import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Textify",
  description: "A collection of simple text functions",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
