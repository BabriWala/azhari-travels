import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "আজহারী ট্রাভেলস",
  description: "আজহারী ট্রাভেলস - আপনার ভ্রমণের জন্য সেরা সঙ্গী। আমাদের সাথে অভিজ্ঞতা করুন অসাধারণ ভ্রমণ, আকর্ষণীয় গন্তব্য ও অনন্য পরিষেবা। যেখানেই যান, আপনার স্বপ্নের ট্রিপ আমাদের সাথে হবে সার্থক!",
  keywords: "Traveling, Egypt, Kairo, Makkah, Madinah, Omrah, Feraoun, Nill Nod",
  authors: [
    { name: "Hanzala Bin Omar", url: "https://www.linkedin.com/in/hanzala2022/" },
    { name: "বাবরি ওয়ালা", url: "https://www.facebook.com/babriwala.hazishaheb/" }
  ],
  openGraph: {
    title: "আজহারী ট্রাভেলস",
    description: "আজহারী ট্রাভেলস - আপনার ভ্রমণের জন্য সেরা সঙ্গী। আমাদের সাথে অভিজ্ঞতা করুন অসাধারণ ভ্রমণ, আকর্ষণীয় গন্তব্য ও অনন্য পরিষেবা।",
    url: "https://azharitravels.com/", // Replace with your actual website URL
    type: "website",
    images: [
      {
        url: "https://azharitravels.com/Logo.svg", // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: "আজহারী ট্রাভেলস - আপনার ভ্রমণের জন্য সেরা সঙ্গী।"
      }
    ]
  }
};

// Include copyright information directly in the Footer component if needed
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-center" // Used to adapt the animation
        ></Toaster>
      </body>
    </html>
  );
}
