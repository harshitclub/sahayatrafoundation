import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/global/navbar/Navbar";
import Footer from "@/components/global/footer/Footer";

const Manrope = localFont({
  src: [
    {
      path: "../fonts/Manrope/Manrope-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../fonts/Manrope/Manrope-Light.ttf",
      weight: "300",
    },
    {
      path: "../fonts/Manrope/Manrope-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Manrope/Manrope-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Manrope/Manrope-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/Manrope/Manrope-Bold.ttf",
      weight: "700",
    },
    {
      path: "../fonts/Manrope/Manrope-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-manrope",
});

const Roboto = localFont({
  src: [
    {
      path: "../fonts/Roboto/Roboto-Thin.ttf",
      weight: "100",
    },

    {
      path: "../fonts/Roboto/Roboto-ExtraLight.ttf",
      weight: "200",
    },

    {
      path: "../fonts/Roboto/Roboto-Light.ttf",
      weight: "300",
    },

    {
      path: "../fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
    },

    {
      path: "../fonts/Roboto/Roboto-SemiBold.ttf",
      weight: "600",
    },

    {
      path: "../fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
    },

    {
      path: "../fonts/Roboto/Roboto-ExtraBold.ttf",
      weight: "800",
    },

    {
      path: "../fonts/Roboto/Roboto-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-roboto",
});

const Caveat = localFont({
  src: [
    {
      path: "../fonts/Caveat/Caveat-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Caveat/Caveat-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Caveat/Caveat-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/Caveat/Caveat-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Sahayatra Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Manrope.variable} ${Roboto.variable} ${Caveat.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
