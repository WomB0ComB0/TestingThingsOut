'use client';

import { Main, Section, Article, Menu } from '@/components/semantics/index';
import { Button, buttonVariants } from '@/components/ui/button';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import React from 'react';

const NotFound: NextPage = () => {
  const path = usePathname();
  const statusText: string = `${path}`;
  const message: string = 'The requested page could not be found.';
  return (
    <>
      <Main className="flex flex-col items-center justify-center w-screen h-screen">
        <Section className={``}>
          <Article className={``}>
            <h1 className={``}>
              <span>{statusText}</span>
              <i> - </i>
              <span>
                <>Not Found</>
              </span>
            </h1>
            <p>
              <b>{message}</b>
            </p>
          </Article>
          <Menu className={`flex  justify-around items-center`}>
            <li>
              <Button
                className={`              ${buttonVariants({
                  variant: 'ghost',
                })}`}
                onClick={() => {
                  window.location.href = '/';
                }}
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                className={`              ${buttonVariants({
                  variant: 'ghost',
                })}`}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload
              </Button>
            </li>
          </Menu>
        </Section>
      </Main>
    </>
  );
};

export default NotFound;
