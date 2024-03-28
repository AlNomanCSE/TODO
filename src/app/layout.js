import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo",
  description: "Create Todo for your day",
  keywords: "todo, daily routine, routine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
