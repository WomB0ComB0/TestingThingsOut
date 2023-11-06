'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFoundComponent() {
  const path = usePathname();

  return (
    <main className="container">
      <h1>{`"${path}"`} Not Found 📖</h1>
      <p>Oops! We could not find this post.</p>
      <Link href="/" className="button">
        Return Home
      </Link>
    </main>
  );
}
