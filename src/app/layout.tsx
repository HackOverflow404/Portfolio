import "./globals.css";
import { Inter } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medhansh Garg | Portfolio",
  description: "Cybersecurity Enthusiast | Embedded Developer | UIUC Computer Engineer",
};

const inter = Inter({ subsets: ["latin"] });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-[#0f0f0f] scroll-smooth text-white ${inter.className}`}>{children}</body>
    </html>
  );
}