import type { Config } from "tailwindcss";

type OpacityFunction = (params: { opacityValue: number }) => string;

function toRgba(cssVariable: string): OpacityFunction {
  const color = `var(${cssVariable})`;
  return ({ opacityValue }) => `rgba(${color}, ${opacityValue})`;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "var(--screen-mobile)",
      tablet: "var(--screen-tablet)",
      desktop: "var(--screen-desktop)",
      tv: "var(--screen-tv)",
    },
    extend: {
      colors: {
        background: toRgba("--background"),
        primary: toRgba("--primary"),
        secondary: toRgba("--secondary"),
        tertiary: toRgba("--tertiary"),
        quaternary: toRgba("--quaternary"),
        hover: toRgba("--hover"),
        click: toRgba("--click"),
        icon: toRgba("--icon"),
        outline: toRgba("--outline"),
        divider: toRgba("--divider"),
        "bg-light": toRgba("--bg-light"),
        "bg-dark": toRgba("--bg-dark"),
        "bg-disabled": toRgba("--bg-disabled"),
        "text-primary": toRgba("--text-primary"),
        "text-secondary": toRgba("--text-secondary"),
        "text-tertiary": toRgba("--text-tertiary"),
        "text-disabled": toRgba("--text-disabled"),
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        focus: "var(--shadow-focus)",
        outline: "var(--shadow-outline)",
        "button-focus": "var(--shadow-button-focus)",
      },
      blur: {
        default: "var(--blur)",
      },
    },
  },
  plugins: [],
};
export default config;
