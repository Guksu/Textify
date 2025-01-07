import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Textify",
  description: "A collection of simple text functions",
};

export default function NotGlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
