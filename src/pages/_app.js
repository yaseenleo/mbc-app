import "@/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Products</title>

        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta name='description' content='Produts' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
