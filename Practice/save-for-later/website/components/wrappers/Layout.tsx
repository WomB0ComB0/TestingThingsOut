import React, { Fragment, PropsWithChildren } from 'react';
import { NavBar, FooterBar } from '@/components/index';
import { Main } from '@/components/semantics/index';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <NavBar />
      <main className={`flex h-fit w-full flex-col items-center justify-center`}>{children}</main>
      <FooterBar />
    </Fragment>
  );
}
