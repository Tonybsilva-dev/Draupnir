import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",

  // Typography
  fontBase: '"Helvetica", "Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "Draupnir Design System",
  brandUrl: "https://www.linkedin.com/in/tony-silva/",
  brandImage: "./draupnir-logo.png",
  brandTarget: "_self",

  colorPrimary: "#10B981",
  colorSecondary: "#10B981",

  // UI
  appBg: "#E4E4E7",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E4E4E7",
  appBorderRadius: 4,

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#18181B",
  barSelectedColor: "#E4E4E7",
  barBg: "#E4E4E7",
  barHoverColor: "#FFFFFF",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,
});

export default theme;
