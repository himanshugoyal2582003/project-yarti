import type { Metadata } from "next";
import { Poppins, Lato, Manrope } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yatri Cabs – India's Leading One Way Intercity Cab Service",
  description: "Book affordable one-way intercity cab service across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lato.variable} ${manrope.variable}`}
    >
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}