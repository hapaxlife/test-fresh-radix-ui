import { Head } from "$fresh/runtime.ts";
export default function Home() {
  return (
    <>
      <Head>
        <title>Test Fresh Radix UI</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-gray-8">
        <a href="/test">lien vers test</a>
      </div>
    </>
  );
}
