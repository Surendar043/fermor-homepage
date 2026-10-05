import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Fermor | Finance, made clear",
  description: "Fermor brings your spending, savings and goals into one calm view, and tells you the next sensible step.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark"  className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
