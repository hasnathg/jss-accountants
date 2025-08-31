import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/main.scss"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JSS & Co Accountants",
  description: "Accounting, tax, payroll & advisory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
           <main className="flex-1">{children}</main>
        <Footer></Footer>
        
      </body>
    </html>
  );
}
