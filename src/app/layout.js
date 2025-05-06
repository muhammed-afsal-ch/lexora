import "./globals.css";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Lexora",
  description:
    "Start and grow your business in Qatar with expert setup, legal support, attestation, and certified translation — all in one place.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white w-full`}
      >
        <div className="bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
