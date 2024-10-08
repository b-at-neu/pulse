import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { Navbar } from '@/components/navbar';
import { cn } from '@/lib/utils';
import './global.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: {
    default: 'Pulse',
    template: `Pulse - %s`
  },
  description: 'Fully custom locker manager'
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn('w-full min-h-screen', fontSans.variable)}>
        <Navbar />
        <div className="flex justify-center">
          <main className="flex flex-col gap-3 md:gap-5 m-3 w-full 2xl:w-4/5">{children}</main>
        </div>
      </body>
    </html>
  );
}
