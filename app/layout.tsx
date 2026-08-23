import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./ui/Background";
import Logo from "@/app/ui/Logo";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyTodo avec Next.js",
  description: "Application codée dans la formation Next.js par DonkeyGeek",
};

export default function RootLayout({ 
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {  
// } LayoutProps<"/">) {
{/*  className={`${geistSans.variable} ${geistMono.variable}`} */}
  return (
    <html lang="fr"> 
      <body className={inter.className}>
        <header>
          <Logo />
        </header>
        <main>
          {children}
          <Background />
        </main>
        <footer><p>&copy;DonkeyGeek</p></footer>
      </body>  
    </html>
  );
}
