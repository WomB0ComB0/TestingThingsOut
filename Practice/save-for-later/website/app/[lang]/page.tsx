import { Section, Article, Picture, Menu, Header } from '@/components/semantics';
import { Button } from '@/components/ui/button';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { handleRelocation } from '@/utils';

const Home: NextPage<LocaleProps> = async ({ params: { lang } }) => {
  return (
    <>
      <Header>
        <Section>
          <Article>
            <h1 className={`text-2xl`}>
              <span className={`text-[#006400]`}>Medi</span>-<span className={`text-[#99c199]`}>Glossary</span>
            </h1>
            <p>
              A free and open-source glossary of medical terms. Based off of the{' '}
              <Link
                href="https://www.merriam-webster.com/medical"
                rel="noopener noreferrer"
                target="_blank"
                className={`underline decoration-solid`}
              >
                Merriam-Webster Medical Dictionary
              </Link>
              .
            </p>
            <Menu>
              <li>
                <Button
                  className={``}
                  onClick={(e) => handleRelocation(e, '/glossary')}
                >
                  Glossary
                </Button>
              </li>
              <li>
                <Button
                  className={``}
                  onClick={(e) => handleRelocation(e, '/about')}
                >
                  About
                </Button>
              </li>
            </Menu>
          </Article>
        </Section>
        <Section>
          <Picture>
            <Image src="/assets/images/cta.png" alt="Logo" width={400} height={400} className={``} />
          </Picture>
        </Section>
      </Header>
    </>
  );
}
export default Home;
