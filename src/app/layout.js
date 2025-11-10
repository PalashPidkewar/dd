import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar/page";
import Footer from "./component/Footer/page";
import ScrollToTop from "./component/Bottomtotopscroll/page";
import EnquireButton from "./component/Enquirebtn/page";
import WhatsAppButton from "./component/whataappbtn/page";
import LocationToggle from "./component/locationtoggle/page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Path Logistic",
  description: "Path Logistic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <WhatsAppButton/>
        <ScrollToTop/>
        <LocationToggle/>
        <EnquireButton/>
      </body>
    </html>
  );
}
