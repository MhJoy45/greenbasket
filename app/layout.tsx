import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Basket — Fresh Organic Food",
  description: "Good food. Grown with care. Shop fresh organic groceries.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
