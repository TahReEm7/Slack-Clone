import {
  Box,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/layouts';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Slack Clone',
  description: 'A clone of Slack built with Next.js and Mantine',
  icons: {
    icon: '/logo.png',
  },
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
      <body className={`${lato.variable} font-sans antialiased`}>
        <MantineProvider>
          <Box>
            <Navbar />
            {children}
            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
