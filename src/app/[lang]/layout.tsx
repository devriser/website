import cn from "@/utils/functions/cn";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/providers/Providers";
import { ReactNode } from "react";
import Footer from "@/components/shared/Footer/Footer";
import MobileNavbar from "@/components/shared/Navbar/MobileNavbar";
import { i18n } from "../../../i18n";

export const metadata: Metadata = {
  title: "DevRiser LLC",
  description:
    "Elevate your customer relationships with our cutting-edge solution, designed to supercharge your business and customer interactions.",
  // manifest: "manifest.webmanifest",
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
};

const monaSans: any = localFont({
  src: [
    {
      path: "./../../assets/fonts/Mona-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../assets/fonts/Mona-Sans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../assets/fonts/Mona-Sans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../assets/fonts/Mona-Sans-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type Props = {
  children: ReactNode;
  params: any;
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} dir={params.lang === "ar" ? "rtl" : "ltr"}>
      <Providers>
        <body className={`${cn(monaSans.variable, "font-mono-sans")}`}>
          <div className="flex max-lg:flex-col bg-primary mx-auto">
            <div className="sticky top-0">
              <Navbar params={params} />
            </div>
            <MobileNavbar params={params} />

            <div className="flex flex-col w-full flex-1">
              {children}
              <Footer params={params} />
            </div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
