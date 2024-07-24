import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { Navbar } from '@/components/navbar';

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
    <html className={fontSans.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className='w-full min-h-screen'>
        <Navbar />
        <main className='m-3'>{children}</main>
      </body>
    </html>
  );
}
