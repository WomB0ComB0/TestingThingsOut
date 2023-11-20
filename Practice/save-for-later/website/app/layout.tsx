import seoConfig from '@/data/next-seo.config';
import Providers from '@/providers/providers';
import Scripts from '@/scripts/Scripts';
import Wrappers from '@/wrappers/Wrappers';
import config from '@/data/config';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import './globals.scss';

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  metadataBase: new URL(config.url),
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.openGraph.url,
    siteName: seoConfig.title,
    images: [
      {
        url: seoConfig.openGraph.images[0].url,
        width: seoConfig.openGraph.images[0].width,
        height: seoConfig.openGraph.images[0].height,
      },
    ],
    // locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/PWA/icons/icon-48x48.png',
        type: 'image/png',
        sizes: '48x48',
      },
      {
        url: '/PWA/icons/icon-72x72.png',
        type: 'image/png',
        sizes: '72x72',
      },
      {
        url: '/PWA/icons/icon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
      },
      {
        url: '/PWA/icons/icon-128x128.png',
        type: 'image/png',
        sizes: '128x128',
      },
      {
        url: '/PWA/icons/icon-144x144.png',
        type: 'image/png',
        sizes: '144x144',
      },
      {
        url: '/PWA/icons/icon-152x152.png',
        type: 'image/png',
        sizes: '152x152',
      },
      {
        url: '/PWA/icons/icon-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/PWA/icons/icon-284x284.png',
        type: 'image/png',
        sizes: '284x284',
      },
      {
        url: '/PWA/icons/icon-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: '/PWA/favicon.ico',
    apple: ['57x57', '60x60', '72x72', '76x76', '114x114', '120x120', '144x144', '152x152', '180x180'].map((size) => ({
      url: `/PWA/ios/apple-icon-${size}.png`,
      sizes: size,
      type: 'image/png',
    })),
  },
  twitter: {
    card: 'summary_large_image',
    creator: seoConfig.twitter.handle,
    title: seoConfig.title,
    description: seoConfig.description,
    site: seoConfig.openGraph.url,
    images: seoConfig.openGraph.images[0].url,
  },
  manifest: '/PWA/manifest.json',
};

const inter = Inter({
  preload: true,
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={cn(
        `${inter.className} scroll-smooth min-h-[100dvh] font-sans box-border list-none no-underline`,
        'bg-[#0C0A09]',
      )}>
        <Scripts />
        <Wrappers>
          <Providers>
            {children}
          </Providers>
        </Wrappers>
      </body>
    </html>
  )
}