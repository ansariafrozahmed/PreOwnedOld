import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PreOwned",
  description: "One Stop Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
