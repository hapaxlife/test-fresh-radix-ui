import { Head } from "$fresh/runtime.ts";
import AccordionDemo from "@/islands/Accordion.tsx";
import AspectRatioDemo from "@/islands/AspectRatio.tsx";
import AlertDialogDemo from "@/islands/Alert.tsx";
import AvatarDemo from "@/islands/Avatar.tsx";
import ProgressDemo from "@/islands/Progress.tsx";
import MenubarDemo from "@/islands/Menubar.tsx";
import RadioGroupDemo from "@/islands/Radiogroup.tsx";
import DropdownMenuDemo from "@/islands/DropdownMenu.tsx";
import FormDemo from "@/islands/Form.tsx";
import CheckboxDemo from "@/islands/Checkbox.tsx";
import CollapsibleDemo from "@/islands/Collapsible.tsx";
import DialogDemo from "@/islands/Dialog.tsx";
import HoverCardDemo from "@/islands/HoverCard.tsx";
import LabelDemo from "@/islands/Label.tsx";
import PopoverDemo from "@/islands/Popover.tsx";
import Switch from "@/islands/Switch.tsx";
import SeparatorDemo from "@/islands/Separator.tsx";
import TabsDemo from "@/islands/Tabs.tsx";
import ToolbarDemo from "@/islands/Toolbar.tsx";
import ToggleDemo from "@/islands/Toggle.tsx";
import ToggleGroupDemo from "@/islands/ToggleGroup.tsx";
import NavigationMenu from "@/islands/NavigationMenu.tsx";
import SelectDemo from "@/islands/Select.tsx";
import SliderDemo from "@/islands/Slider.tsx";
import ToastDemo from "@/islands/Toast.tsx";
import ContextMenuDemo from "@/islands/ContextMenu.tsx";

// Not working
/*
SelectDemo => page freeze when clicked
*/

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Fresh Radix UI</title>
      </Head>

      <div class="px-4 py-8 mx-auto bg-gray-8">
        <ContextMenuDemo></ContextMenuDemo>
        <ToastDemo></ToastDemo>
        <SliderDemo></SliderDemo>
        <SelectDemo></SelectDemo>
        <NavigationMenu></NavigationMenu>
        <Switch></Switch>
        <ToggleGroupDemo></ToggleGroupDemo>
        <ToggleDemo></ToggleDemo>
        <AvatarDemo></AvatarDemo>
        <AccordionDemo></AccordionDemo>
        <AlertDialogDemo></AlertDialogDemo>
        <ProgressDemo></ProgressDemo>
        <MenubarDemo></MenubarDemo>
        <RadioGroupDemo></RadioGroupDemo>
        <FormDemo></FormDemo>
        <DropdownMenuDemo></DropdownMenuDemo>
        <CheckboxDemo></CheckboxDemo>
        <CollapsibleDemo></CollapsibleDemo>
        <DialogDemo></DialogDemo>
        <HoverCardDemo></HoverCardDemo>
        <LabelDemo></LabelDemo>
        <PopoverDemo></PopoverDemo>
        <SeparatorDemo></SeparatorDemo>
        <TabsDemo></TabsDemo>
        <ToolbarDemo></ToolbarDemo>
        <AspectRatioDemo></AspectRatioDemo>
      </div>
    </>
  );
}
