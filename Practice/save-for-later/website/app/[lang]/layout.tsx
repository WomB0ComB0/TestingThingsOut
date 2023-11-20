import React from 'react';

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }];
}

export default function Root({ children, params }: { children: any; params: { lang: string } }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}