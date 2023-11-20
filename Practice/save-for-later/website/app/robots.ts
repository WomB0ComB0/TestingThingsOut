import config from 'data/config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${config.url}/sitemap.xml`,
    host: `${config.url}`,
  };
}
