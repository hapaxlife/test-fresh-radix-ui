import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import AlertDialogDemo from "../islands/Alert.tsx";
import ProgressDemo from "../islands/Progress.tsx";



export default function Home() {
  return (
    <>
      <Head>
        <title>Test Fresh Radix UI</title>

        
      </Head>
      <div class="px-4 py-8 mx-auto">
       <AlertDialogDemo></AlertDialogDemo>
       <ProgressDemo></ProgressDemo>
      </div>
    </>
  );
}
