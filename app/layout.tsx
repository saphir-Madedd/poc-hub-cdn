import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

import "@jade-innovation/template-design/style.css";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import { getClientFromHost, getLogoUrl, getThemeCssUrl } from "@/lib/branding";

import SideBarTest from "@/components/SideBarTest";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POC Hub",
  description: "Multi-tenant hub",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const client = getClientFromHost(host);
  const themeCssUrl = getThemeCssUrl({ client, host });
  const logoUrl = getLogoUrl({ client, host });

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}  h-full antialiased`}
      data-client={client}
    >
      <head>
        <link key={themeCssUrl} rel="stylesheet" href={themeCssUrl} />
      </head>
      <body className="h-full ">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            <div className="relative flex w-full bg-background">
              <SideBarTest logoUrl={logoUrl} />

              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
