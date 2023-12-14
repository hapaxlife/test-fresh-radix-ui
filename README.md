# Fresh project & Radix UI

Test integration of Radix UI in a fresh project 1.6.1

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
- See https://github.com/radix-ui/primitives/issues/2557


For most import, you need to add an external to esm.sh

"@radix-ui/react-form" :
"https://esm.sh/@radix-ui/react-form@latest?external=react,react-dom&target=es2022",