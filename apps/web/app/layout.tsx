import localFont from "next/font/local"

import "@weiyinblue/ui/styles.css"
import { ThemeProvider, cn } from "@weiyinblue/ui"

const sans = localFont({
  src: "./fonts/SpaceGrotesk-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
})

const mono = localFont({
  src: "./fonts/JetBrainsMono-Variable.ttf",
  variable: "--font-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={cn("antialiased", sans.variable, mono.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
