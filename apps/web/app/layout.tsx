import { JetBrains_Mono, Space_Grotesk } from "next/font/google"

import "@weiyinblue/ui/styles.css"
import { ThemeProvider, cn } from "@weiyinblue/ui"

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
