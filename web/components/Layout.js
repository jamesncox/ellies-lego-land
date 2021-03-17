import React from "react";
import Head from "next/head";

export default function Layout({ title, width, children }) {
  return (
    <div className="bg-blue-400">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container mx-auto ${width} pt-8 min-h-screen`}>
        {children}
      </main>
    </div>
  );
}
