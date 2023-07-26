# Fresh project & Radix UI

Test integration of Radix UI in a fresh project

Examples come from https://www.radix-ui.com/docs/primitives/components/accordion
Alert

- [x] DropdownMenu
- [x] Form
- [x] Menubar
- [x] Progress
- [x] Radiogroup
- [ ] NavigationMenu.tsx
- [ ] Switch
- [ ] Toast

For most import, you need to add an external to esm.sh

"@radix-ui/react-form" : "https://esm.sh/@radix-ui/react-form@latest?external=react,react-dom&target=es2022",
    

deno task esm:add @radix-ui/react-form


Sometimes : this error appears. Why ?

An error occurred during route handling or page rendering. TypeError: Cannot read properties of null (reading 'useCallback')
    at n.useCallback (https://esm.sh/stable/react@18.2.0/es2022/react.mjs:2:6174)
