import { Poppins, Mea_Culpa, B612_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const meaCulpa = Mea_Culpa({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400"],
});

const b612 = B612_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Belvarchie | Backend Developer",
  description: "Portfolio of Belvarchie, Backend Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${meaCulpa.variable} ${b612.variable}`}>
      <body>
        <NoiseOverlay />
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
