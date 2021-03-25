import React from "react";
import Head from "next/head";

export default function Layout({ title, width, children }) {
  return (
    <div className="bg-blue-400">
      <Head>
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:type"
          content="website"
        />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content="Ellie's Lego Land"
        />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content="My daughter's very own blog to showcase her Lego builds. Created with Next.js, Sanity.io and Tailwind CSS."
        />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content="https://i.ibb.co/Z6y9vs6/ellies-lego-land-og.jpg"
        />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content="https://ellies-lego-land.vercel.app/"
        />

        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container mx-auto ${width} pt-8 min-h-screen`}>
        {children}
      </main>
    </div>
  );
}
