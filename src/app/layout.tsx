import cn from "@/utils/functions/cn";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/providers/Providers";

export const metadata: Metadata = {
  title: "DevRiser LLC",
  description:
    "Elevate your customer relationships with our cutting-edge solution, designed to supercharge your business and customer interactions.",
  // manifest: "manifest.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const monaSans: any = localFont({
  src: [
    {
      path: "./../assets/fonts/Mona-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Mona-Sans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Mona-Sans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Mona-Sans-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${cn(
          monaSans.variable,
          "font-mono-sans"
        )} flex bg-primary h-screen`}
      >
        <Providers>
          <div className='sticky top-0'>
            <Navbar />
          </div>
          <div className='flex justify-center w-full'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
