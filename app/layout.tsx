import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/page";
import Footer from "@/Components/Footer/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Nav aur Footer hamesha body ke andar hone chahiyen */}
        <Navbar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}