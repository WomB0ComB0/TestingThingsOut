"use client"
import React from 'react';
import Link from 'next/link';
import { Article, Footer } from '@/components/semantics/index';
import { gitHubs } from '@/constants';

const FooterBar = () => {
  const [gitHub, setGitHub] = React.useState<GitHubs[]>(gitHubs);
  React.useEffect(() => {
    setGitHub(gitHubs);
  }, []);
  const year = new Date().getFullYear();
  return (
    <footer className={`pt-6`}>
      <Article attributes={{id: 'footer-container'}}>
        <p>
          Made with
          <span>
            {` `}💜{` `}
          </span>
          by{` `}
          {gitHub.map((gitHub, index: IndexProps) => (
            <>
              <Link href={gitHub.link} key={index} target="_blank" rel="noreferrer noopener">
                {gitHub.name}
              </Link>
            </>
          ))}
        </p>
        <p>
          <small>
            Copyright © <span>{year}</span> All rights reserved
          </small>
        </p>
      </Article>
    </footer>
  );
};

export default FooterBar;
