import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";

import { EB_Garamond } from 'next/font/google'
import Footer from "./_components/footer";
 
const eb_garamond = EB_Garamond({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Home | Aman Sharma",
  description: "aman.sharma",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/a.svg",
        href: "/a.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/a.svg",
        href: "/a.svg",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <body className={eb_garamond.className}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Header />
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
