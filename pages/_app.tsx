import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/normalize.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
