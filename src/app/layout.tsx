import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Slack Clone',
  description: 'A clone of Slack built with Next.js and Mantine',
  // icons: {
  //   icon: '',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript forceColorScheme="light" />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <MantineProvider>
            {children}
        </MantineProvider>
      </body>
    </html>
  );
}

