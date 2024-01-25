import cn from "@/utils/functions/cn";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/providers/Providers";
import Footer from "@/components/shared/Footer/Footer";
import MobileNavbar from "@/components/shared/Navbar/MobileNavbar";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const monaSans = localFont({
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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const metadata: Record<string, Metadata> = {
    en: {
      title: "DevRiser LLC",
      description:
        "Elevate your customer relationships with our cutting-edge solution, designed to supercharge your business and customer interactions.",
      generator: "Devriser Team",
      applicationName: "Devriser Website",

      keywords: [
        "Devriser",
        "Website Development",
        "Mobile App Development",
        "Web App Development",
        "Enterprise Solutions",
        "Ai-ml Development",
        "Software Development",
        "SaaS Development",
        "Ui-ux Development",
        "Blockchain Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Cloud Computing",
      ],
      manifest: "manifest.webmanifest",
      // viewport: {
      //   width: "device-width",
      //   initialScale: 1,
      //   maximumScale: 1,
      // },
    },
    fr: {
      title: "DevRiser",
      description:
        "Élevez vos relations client avec notre solution de pointe, conçue pour dynamiser votre entreprise et vos interactions avec les clients.",
      generator: "Équipe DevRiser",
      applicationName: "Site Web DevRiser",

      keywords: [
        "DevRiser",
        "Développement de sites Web",
        "Développement d'applications mobiles",
        "Développement d'applications Web",
        "Solutions d'entreprise",
        "Développement IA-ML",
        "Développement de logiciels",
        "Développement de SaaS",
        "Développement UI-UX",
        "Développement Blockchain",
        "Intelligence artificielle",
        "Apprentissage automatique",
        "Informatique en nuage",
      ],
    },
  };

  const currentMetadata = metadata[params.lang] || metadata.en;

  return (
    <html
      lang={params.lang}
      dir={params.lang === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
    >
      <head>
        <title>{currentMetadata.title as React.ReactNode}</title>
        <meta
          name="description"
          content={currentMetadata.description ?? undefined}
        />
        <meta
          name="keywords"
          content={
            Array.isArray(currentMetadata.keywords)
              ? currentMetadata.keywords.join(", ")
              : currentMetadata.keywords ?? undefined
          }
        />
        <Script id="google-analytics">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WG6RGRJJ');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5K1RYWF57Z"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5K1RYWF57Z');
          `}
        </Script>
      </head>
      <body className={`${cn(monaSans.variable, "font-mono-sans")}`}>
        <Providers>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WG6RGRJJ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <div className="flex max-lg:flex-col bg-primary mx-auto">
            <Toaster />
            <div className="sticky top-0">
              <Navbar params={params} />
            </div>
            <MobileNavbar params={params} />

            <div className="flex flex-col w-full flex-1">
              <div className="px-12 max-md:px-8 max-sm:px-6">{children}</div>

              <Footer params={params} />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
