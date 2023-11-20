import { Section, Picture } from '@/components/semantics';
import Image from 'next/image';
import React from 'react';
import { NextPage } from 'next';

const Loading: NextPage = () => (
  <>
    <Section className="flex items-center justify-center h-screen text-white flex-col">
      <Picture
        className={`
        relative transition-all select-none animate-pulse h-52 w-52
        `}
      >
        <Image
          className="absolute mt-2 transition-all select-none animate-pulse h-52 w-52"
          src="/assets/images/logo.png"
          alt="Loading..."
          loading="eager"
          width={200}
          height={200}
        />
      </Picture>
    </Section>
  </>
);

export default Loading;
