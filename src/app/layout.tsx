import type { Metadata } from "next";
import { Geist, Geist_Mono, MedievalSharp} from "next/font/google";
import "./globals.css";
import { Container } from '@/app/components/Container';
import { AppWrapper } from '@/app/components/AppWrapper';
import Image from 'next/image';
import { Footer } from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const medievalSharp = MedievalSharp({
  variable: "--font-medieval-sharp",
  subsets: ["latin-ext"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${medievalSharp.variable} antialiased`}
      >
        <Container>
          <AppWrapper>
            <Image src="/logo.jpg" alt="Warhammer logo" width={400} height={50} />
            <div className="relative w-[calc(100%+6rem)] h-[200px] left-[-3rem]">
              <Image src="/top.webp" alt="Top forest" fill />
            </div>
            
            {children}
            <div className="relative w-[calc(100%+6rem)] h-[200px] left-[-3rem]">
              <Image src="/bottom.webp" alt="Bottom forest" fill />
            </div>
            <Footer />
          </AppWrapper>
        </Container>
      </body>
    </html>
  );
}
