import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Mudrex',
  description: 'Now incest in crypto in simple, safe and smarter way',
  icons: [
    {
      media: "(prefers-color-scheme:light)",
      url: "/logo/logo-m.png",
      href: "/logo/logo-m.png"
    },
    {
      media: "(prefers-color-scheme:dark)",
      url: "/logo/logo-m.png",
      href: "/logo/logo-m.png"
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
