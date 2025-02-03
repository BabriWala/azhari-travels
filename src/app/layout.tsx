// @ts-nocheck
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Script from 'next/script';

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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W58KWZ7D');`}
        </Script>




      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-center" // Used to adapt the animation
        ></Toaster>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W58KWZ7D"
          height="0" width="0" className="hidden invisible"></iframe></noscript>
      </body>
    </html>
  );
}
