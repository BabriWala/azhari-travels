import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from './components/Navbar/NavBar'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



export const metadata: Metadata = {
  title: "আজহারী ট্রাভেলস",
  description: "আজহারী ট্রাভেলস - আপনার ট্রাভেলিংয়ের জন্য সেরা সঙ্গী। আমাদের সাথে অভিজ্ঞতা করুন অসাধারণ ভ্রমণ, আকর্ষণীয় গন্তব্য ও অনন্য পরিষেবা। যেখানেই যান, আপনার স্বপ্নের ট্রিপ আমাদের সাথে হবে সার্থক!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
