import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
    return (
      <Html lang="id">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="application-name" content="App" />
          <script defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }