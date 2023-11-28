# Fresh project & Radix UI

Test integration of Radix UI in a fresh project

Examples come from https://www.radix-ui.com/primitives/docs/overview/introduction

Use of esm v135 enhances compatibility

- [x] Accordion
- [x] AlertDialog
- [x] AspectRatio
- [x] Avatar
- [x] Checkbox
- [x] Collapsible
- [x] DropdownMenu
- [x] Form
- [x] Menubar
- [x] Progress
- [x] Radiogroup
- [x] HoverCard
- [x] Form
- [x] Dialog
- [x] Label
- [x] Popover
- [x] Separator
- [x] Tabs
- [x] Toolbar
- [x] Toggle
- [x] Toggle Group
- [x] Switch
- [x] NavigationMenu
- [x] Slider => work with v135 but selector doesn't appear
- [x] Toast
- [x] Context Menu

** Not working **
- [ ] Select => when clicked, open menu but page freezes


For most import, you need to add an external to esm.sh

"@radix-ui/react-form" :
"https://esm.sh/@radix-ui/react-form@latest?external=react,react-dom&target=es2022",


Sometimes : this error appears. Why ?

An error occurred during route handling or page rendering. TypeError: Cannot
read properties of null (reading 'useCallback') at n.useCallback
(https://esm.sh/stable/react@18.2.0/es2022/react.mjs:2:6174)

    "@radix-ui/primitive": "https://esm.sh/v129/@radix-ui/primitive@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-compose-refs": "https://esm.sh/v129/@radix-ui/react-compose-refs@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-context": "https://esm.sh/v129/@radix-ui/react-context@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-id": "https://esm.sh/v129/@radix-ui/react-id@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-label": "https://esm.sh/v129/@radix-ui/react-label@2.0.2?external=react,react-dom&target=es2022",
    "@radix-ui/react-collection": "https://esm.sh/v129/@radix-ui/react-collection@1.0.3?external=react,react-dom&target=es2022",
    "@radix-ui/react-direction": "https://esm.sh/v129/@radix-ui/react-direction@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-dismissable-layer": "https://esm.sh/v129/@radix-ui/react-dismissable-layer@1.0.4?external=react,react-dom&target=es2022",
    "@radix-ui/react-presence": "https://esm.sh/v129/@radix-ui/react-presence@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-primitive": "https://esm.sh/v129/@radix-ui/react-primitive@1.0.3?external=react,react-dom&target=es2022",
    "@radix-ui/react-use-callback-ref": "https://esm.sh/v129/@radix-ui/react-use-callback-ref@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-use-controllable-state": "https://esm.sh/v129/@radix-ui/react-use-controllable-state@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-use-layout-effect": "https://esm.sh/v129/@radix-ui/react-use-layout-effect@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-use-previous": "https://esm.sh/v129/@radix-ui/react-use-previous@1.0.1?external=react,react-dom&target=es2022",
    "@radix-ui/react-visually-hidden": "https://esm.sh/v129/@radix-ui/react-visually-hidden@1.0.3?external=react,react-dom&target=es2022",
    "@radix-ui/react-portal": "https://esm.sh/v129/@radix-ui/react-portal@latest?external=react,react-dom&target=es2022",

An error occurred during route handling or page rendering. TypeError: Cannot
read properties of null (reading 'useMemo') at n.useMemo
(https://esm.sh/stable/react@18.2.0/es2022/react.mjs:2:6723) at
https://esm.sh/v127/@radix-ui/react-context@1.0.1/es2022/react-context.mjs:2:851
at
https://esm.sh/v127/@radix-ui/react-context@1.0.1/es2022/react-context.mjs:2:1124
at Array.reduce (<anonymous>) at
https://esm.sh/v127/@radix-ui/react-context@1.0.1/es2022/react-context.mjs:2:1080
at Object.Y
(https://esm.sh/v127/@radix-ui/react-context-menu@2.1.4/X-ZS9yZWFjdCxyZWFjdC1kb20/es2022/react-context-menu.mjs:2:1172)
at m
(https://esm.sh/v129/preact-render-to-string@6.2.0/X-ZS8q/denonext/preact-render-to-string.mjs:2:2602)
at m
(https://esm.sh/v129/preact-render-to-string@6.2.0/X-ZS8q/denonext/preact-render-to-string.mjs:2:3167)
at m
(https://esm.sh/v129/preact-render-to-string@6.2.0/X-ZS8q/denonext/preact-render-to-string.mjs:2:2113)
at m
(https://esm.sh/v129/preact-render-to-string@6.2.0/X-ZS8q/denonext/preact-render-to-string.mjs:2:3167)
