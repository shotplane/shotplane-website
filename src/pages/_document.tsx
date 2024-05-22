import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const gacCode = process.env.GOOGLE_ANALYTIC_CODE;

  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <script type="text/javascript" src="https://s3.tradingview.com/tv.js" defer />
        <script src="https://www.google.com/recaptcha/api.js?render=6LfYc58pAAAAAOitqhJilkLZdeTRRlQK60vJ5Hwy"></script>

        {gacCode && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gacCode}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gacCode}');
            `,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}