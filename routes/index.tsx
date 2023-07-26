import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import AlertDialogDemo from "@/islands/Alert.tsx";
import ProgressDemo from "@/islands/Progress.tsx";
import MenubarDemo from "@/islands/Menubar.tsx";
import RadioGroupDemo from "@/islands/Radiogroup.tsx";
import DropdownMenuDemo from "@/islands/DropdownMenu.tsx";
import FormDemo from "@/islands/Form.tsx";
// import NavigationMenu from "@/islands/NavigationMenu.tsx";
// import Switch from "@/islands/Switch.tsx";
// import ToastDemo from "@/islands/Toast.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Fresh Radix UI</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg(gray-8)">
       <AlertDialogDemo></AlertDialogDemo>
       <ProgressDemo></ProgressDemo>
    <MenubarDemo></MenubarDemo>
    <RadioGroupDemo></RadioGroupDemo>
    <FormDemo></FormDemo>
    <DropdownMenuDemo></DropdownMenuDemo>
      </div>
    </>
  );
}
