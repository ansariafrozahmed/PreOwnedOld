import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";
import AnnouncementBar from "@/components/header-footer/AnnouncementBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vintage Watch",
  description: "One Stop Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
