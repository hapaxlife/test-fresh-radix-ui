// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { Options } from "$fresh/plugins/twindv1.ts";
import { defineConfig, Preset } from "@twind/core";
// twind preset
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailWind from "twind-preset-tailwind/base";
import * as colors from "twind-preset-tailwind/colors";
import { blackA ,mauve, violet, red} from "@radix-ui/colors"
import ext from "twind-preset-ext";

/** @todo Remove the need for type-assertions */
export default {
  darkMode: "class",
  selfURL: import.meta.url,
  // <BaseTheme, Preset<any>[]>
  ...defineConfig({
    presets: [
      /**
       * Note: `presetAutoprefix()` was removed as it seemed to make no visual or functional difference to the website.
       * If styling issues re-occur in the future, try adding `presetAutoprefix()` back here.
       * @see {@link https://github.com/denoland/saaskit/pull/282}
       */
      presetTailWind({
        colors: {
          ...mauve,
          ...violet,
          ...red,
          ...blackA,
        },
        // not correct how to insert
        keyframes: {
          overlayShow: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          contentShow: {
            from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
            to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          },
        },
        animation: {
          overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
        // deno-lint-ignore no-explicit-any
      }) as Preset<any>,
      ext() as Preset,
    ],
  }),
} as Options;
