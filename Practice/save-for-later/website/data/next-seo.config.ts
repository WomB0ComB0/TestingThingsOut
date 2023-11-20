import config from './config';

const seoConfig = {
  title: config.defaultTitle,
  description: config.defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: config.url,
    siteName: config.defaultTitle,
    images: [
      {
        url: `${config.url}/assets/images/og.png`,
        width: 1440,
        height: 366,
        alt: config.defaultDescription,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: config.twitter,
    site: config.twitter,
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
