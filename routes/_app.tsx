import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link href="/global.css" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Component />
    </>
  );
}
