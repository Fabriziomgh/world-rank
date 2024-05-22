import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import HeaderFondo from '@/components/HeaderFondo';
import './globals.css';

const beVietnam = Be_Vietnam_Pro({
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
   title: 'World Rank',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${beVietnam.className} bg-fondo`}>
            <HeaderFondo />
            <div className="max-w-7xl border border-secondary border-opacity-20 px-2 lg:px-8 mb-20 bg-fondo mx-auto mt-72 lg:rounded-xl shadow-lg">
               {children}
            </div>
         </body>
      </html>
   );
}
