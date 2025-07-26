'use client'

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider  from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Walyntix.studio - Creative Portfolio',
  description: 'Modern portfolio showcasing full stack development projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}