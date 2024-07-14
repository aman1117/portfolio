import type { Metadata } from "next";
import "./globals.css";
import "./font.css";
import Header from "./_components/header";

// import { Source_Serif_4 } from 'next/font/google'
import Footer from "./_components/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";

// const source_serif_4 = Source_Serif_4({
//   weight: '400',
//   subsets: ['latin'],
// })

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
    <html lang="en" >
      <body className={` px-3`} >
        <div className="flex flex-col min-h-screen" >
          {/* <ThemeProvider attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="portfolio-theme-1"> */}
            <div className="flex-grow">
              <Header />
              <main className="flex-grow">{children}</main>
            </div>
          {/* </ThemeProvider> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
