import React, { PropsWithChildren, FC } from 'react';
import { LazyImageWrapper, ClientWrapper, Layout } from '@/components/wrappers';

const Wrappers: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Layout>
      <LazyImageWrapper>
        <ClientWrapper>{children}</ClientWrapper>
      </LazyImageWrapper>
    </Layout>
  </>
);

export default Wrappers;
