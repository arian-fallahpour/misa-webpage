import "@/sass/globals.scss";

import type { Metadata } from "next";
import localFont from "next/font/local";

import Nav from "@/components/layout/Nav/Nav";
import Footer from "@/components/layout/Footer/Footer";
import { join } from "@/utils/helper-client";

const helvetica = localFont({
  variable: "--font-family-helvetica",
  src: [
    {
      path: "../public/fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../public/fonts/Helvetica-Oblique.ttf",
    //   weight: "400",
    //   style: "italic",
    // },
    {
      path: "../public/fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    // {
    //   path: "../public/fonts/Helvetica-BoldOblique.ttf",
    //   weight: "700",
    //   style: "italic",
    // },
  ],
});

const noto = localFont({
  variable: "--font-family-noto",
  src: [
    {
      path: "../public/fonts/NotoNastaliqUrdu-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Official MISA Website",
  description: "Website for the McMaster Iranian Student Association.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={join(helvetica.variable, noto.variable)}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
