import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import "./globals.css"

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/providers"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { SiteFooter } from "@/components/site-footer"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased ",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          <ThemeSwitcher />
        </body>
      </html>
    </>
  )
}
