import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hun Jeong — Science Education Researcher",
  description:
    "Doctoral student in Science Education at Seoul National University. Specializing in qualitative research, scientific argumentation, and epistemic agency.",
  openGraph: {
    title: "Hun Jeong — Science Education Researcher",
    description:
      "Doctoral student in Science Education at Seoul National University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
