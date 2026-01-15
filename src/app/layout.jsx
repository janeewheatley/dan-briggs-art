import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dan Briggs Art",
  description: "Portfolio of artist Dan Briggs featuring drawings, comics, and music",
  openGraph: {
    title: "Dan Briggs Art",
    description: "Portfolio of artist Dan Briggs featuring drawings, comics, and music",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
