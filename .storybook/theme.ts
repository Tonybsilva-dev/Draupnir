import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "Draupnir UI",
  brandUrl: "https://www.linkedin.com/in/tony-silva/",
  brandImage: "https://i.imgur.com/4f4HGxn.png",
  brandTarget: "_self",

  //
  colorPrimary: "#22C55E",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  // appBorderColor: "#585C6D",
  // appBorderRadius: 4,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  // barTextColor: "#9E9E9E",
  // barSelectedColor: "#585C6D",
  // barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  // inputBorder: "#10162F",
  // inputTextColor: "#10162F",
  // inputBorderRadius: 2,
});

export default theme;
