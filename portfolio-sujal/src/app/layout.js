import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import PointerCircle from "./components/PointerCircle";
import FloatingActionButton from "./components/FloatingActionButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sujal Soni - Portfolio",
  description: "Full-Stack Web Developer Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* This is where the favicon is linked */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <smain className="container mx-auto px-4 py-8">{children}</smain>
        <PointerCircle />
        <FloatingActionButton />
      </body>
    </html>
  );
}

