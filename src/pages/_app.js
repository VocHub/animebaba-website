import "@/styles/globals.css";
import { NextSeo } from "next-seo";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextSeo
        title="AnimeBaba"
        description="Your #1 animes plug"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
