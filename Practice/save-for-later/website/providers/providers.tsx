import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider, ToasterProvider } from '@/components/providers';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <>
    <ToasterProvider />
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="MediGlossary-theme">
      {children}
    </ThemeProvider>
  </>
);

export default Providers;
