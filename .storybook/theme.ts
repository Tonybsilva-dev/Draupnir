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

  colorPrimary: "#FFD600", // amarelo solar
  colorSecondary: "#3A4F63", // azul acinzentado

  // UI
  appBg: "#F5F5F5", // cinza claro
  appContentBg: "#FFFFFF",
  appBorderColor: "#BDBDBD", // cinza médio
  appBorderRadius: 4,

  // Text colors
  textColor: "#212121", // texto escuro
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#3A4F63", // azul acinzentado
  barSelectedColor: "#FFD600", // amarelo solar
  barBg: "#FFFFFF",
  barHoverColor: "#FFF9C4", // amarelo claro

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#BDBDBD",
  inputTextColor: "#212121",
  inputBorderRadius: 4,
});

export default theme;
