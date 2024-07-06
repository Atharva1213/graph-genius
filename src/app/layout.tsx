import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Graph Genius Maker',
  description:
    'Create a  Graph Genius for free with easy to use tools. Download the pie chart as JPG, PNG, or SVG file. Customize line graphs according to your choice.',
  keywords: 'graph maker,pie chart,line graph,Graph-genius',
};

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
