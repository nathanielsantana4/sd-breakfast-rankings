import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./nav/Navbar";

export const metadata: Metadata = {
  title: "San Diego Breakfast 7",
  description: "Three friends ranking San Diego breakfast spots on a 7 point scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <footer className="bg-stone-900 text-white text-center py-8 mt-16">
          <p className="font-semibold">
            San Diego Breakfast 7
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Three friends. Seven points. One breakfast ranking.
          </p>
        </footer>
      </body>
    </html>
  );
}