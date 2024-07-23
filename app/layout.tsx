import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

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
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
