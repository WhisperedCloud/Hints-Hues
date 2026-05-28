import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hints&Hues | Luxury Resin Art",
  description: "Handcrafted artistic expression, fluid textures, dreamy color blending, and contemporary elegance by Hints&Hues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
