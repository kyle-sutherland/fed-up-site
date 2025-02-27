import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  const meta = {
    title: "Fed Up Concordia",
    description:
      "A concise website stating the mission of the Fed Up Campaign at Concordia University campus in Montreal",
    image: "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
    // icon: "/favicon.png"
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
