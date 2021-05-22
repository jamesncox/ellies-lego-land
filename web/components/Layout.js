import React from "react";
import Head from "next/head";

export default function Layout({ title, width, children }) {
  return (
    <div className="bg-blue-400">
      <Head>
        {/* LinkedIn card */}
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
          content="https://i.ibb.co/5vBKCNR/ellie-lego-og.jpg"
        />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content="https://ellies-lego-land.vercel.app/"
        />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@MemRook" />

        <meta
          name="twitter:domain"
          content="https://ellies-lego-land.vercel.app/"
        />

        <meta name="twitter:title" content="Ellie's Lego Land" />

        <meta
          name="twitter:description"
          content="My daughter's very own blog to showcase her Lego builds. Created with Next.js, Sanity.io and Tailwind CSS."
        />

        <meta
          name="twitter:image"
          content="https://i.ibb.co/5vBKCNR/ellie-lego-og.jpg"
        />

        <title>{title}</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <main
        className={`container mx-auto ${width} pt-8 min-h-screen flex flex-col`}
      >
        {children}
      </main>
    </div>
  );
}
