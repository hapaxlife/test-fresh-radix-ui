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
          hide: {
            from: { opacity: 1 },
            to: { opacity: 0 },
          },
          slideIn: {
            from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
            to: { transform: 'translateX(0)' },
          },
          swipeOut: {
            from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
            to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
          },
          overlayShow: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          contentShow: {
            from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
            to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          },
          slideDownAndFade: {
            from: { opacity: 0, transform: 'translateY(-2px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          slideLeftAndFade: {
            from: { opacity: 0, transform: 'translateX(2px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          slideUpAndFade: {
            from: { opacity: 0, transform: 'translateY(2px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          slideRightAndFade: {
            from: { opacity: 0, transform: 'translateX(-2px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
        },
        animation: {
          hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
          overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
        // deno-lint-ignore no-explicit-any
      }) as Preset<any>,
      ext() as Preset,
    ],
  }),
} as Options;
