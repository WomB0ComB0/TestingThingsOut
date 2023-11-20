'use client';

import React, { useEffect } from 'react';
import { Section, Article } from '@/components/semantics';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Article>
        <p>Something went wrong!</p>
        <button onClick={() => reset()}>Reset error boundary</button>
      </Article>
    </Section>
  );
}
