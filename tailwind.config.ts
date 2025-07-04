import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mulish: "Mulish, sans-serif",
    },
    screens: {
      mobile: "var(--screen-mobile)",
      tablet: "var(--screen-tablet)",
      desktop: "var(--screen-desktop)",
      tv: "var(--screen-tv)",
    },
    fontSize: {
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      md: "var(--text-md)",
      lg: "var(--text-lg)",
      xl: "var(--text-xl)",
      "2xl": "var(--text-2xl)",
      "4xl": "var(--text-4xl)",
      tmd: "var(--title-md)",
      tlg: "var(--title-lg)",
      txl: "var(--title-xl)",
    },
    extend: {
      colors: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        tertiary: "rgba(var(--tertiary), <alpha-value>)",
        quaternary: "rgba(var(--quaternary), <alpha-value>)",
        hover: "rgba(var(--hover), <alpha-value>)",
        click: "rgba(var(--click), <alpha-value>)",
        icon: "rgba(var(--icon), <alpha-value>)",
        outline: "rgba(var(--outline), <alpha-value>)",
        divider: "rgba(var(--divider), <alpha-value>)",
        disabled: "rgba(var(--text-disabled), <alpha-value>)",
        notice: {
          success: {
            bg: "rgb(var(--notice-success-bg))",
            text: "rgb(var(--notice-success-text))",
          },
          error: {
            bg: "rgb(var(--notice-error-bg))",
            text: "rgb(var(--notice-error-text))",
          },
          alert: {
            bg: "rgb(var(--notice-alert-bg))",
            text: "rgb(var(--notice-alert-text))",
          },
          info: {
            bg: "rgb(var(--notice-info-bg))",
            text: "rgb(var(--notice-info-text))",
          },
        },
      },
      backgroundColor: {
        light: "rgba(var(--bg-light), <alpha-value>)",
        dark: "rgba(var(--bg-dark), <alpha-value>)",
        success: "rgba(var(--text-success), <alpha-value>)",
        error: "rgba(var(--text-error), <alpha-value>)",
        info: "rgba(var(--text-info), <alpha-value>)",
        disabled: "rgba(var(--bg-disabled), <alpha-value>)",
      },
      textColor: {
        gray: {
          primary: "rgba(var(--text-primary), <alpha-value>)",
          secondary: "rgba(var(--text-secondary), <alpha-value>)",
          tertiary: "rgba(var(--text-tertiary), <alpha-value>)",
        },
        success: "rgba(var(--text-success), <alpha-value>)",
        error: "rgba(var(--text-error), <alpha-value>)",
        info: "rgba(var(--text-info), <alpha-value>)",
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
      borderRadius: {
        none: "var(--border-radius-none)",
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
      },
      borderWidth: {
        none: "var(--border-none)",
        sm: "var(--border-sm)",
        md: "var(--border-md)",
        lg: "var(--border-lg)",
      },
      spacing: {
        none: "var(--spacing-none) /* 0px */",
        "4xs": "var(--spacing-4xs) /* 8px */",
        "2xs": "var(--spacing-2xs) /* 12px */",
        xs: "var(--spacing-xs) /* 16px */",
        sm: "var(--spacing-sm) /* 20px */",
        md: "var(--spacing-md) /* 24px */",
        lg: "var(--spacing-lg) /* 32px */",
        xl: "var(--spacing-xl) /* 40px */",
        "2xl": "var(--spacing-2xl) /* 48px */",
        "4xl": "var(--spacing-4xl) /* 56px */",
        0: "var(--spacing-none) /* 0px */",
        1: "var(--spacing-4xs) /* 8px */",
        2: "var(--spacing-2xs) /* 12px */",
        3: "var(--spacing-xs) /* 16px */",
        4: "var(--spacing-sm) /* 20px */",
        5: "var(--spacing-md) /* 24px */",
        6: "var(--spacing-lg) /* 32px */",
        7: "var(--spacing-xl) /* 40px */",
        8: "var(--spacing-2xl) /* 48px */",
        9: "var(--spacing-4xl) /* 56px */",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-to-top": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-to-bottom": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-to-left": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-to-right": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "fade-out": "fade-out 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "slide-in-from-top": "slide-in-from-top 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "slide-out-to-top": "slide-out-to-top 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "slide-out-to-bottom": "slide-out-to-bottom 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "slide-in-from-left": "slide-in-from-left 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "slide-out-to-left": "slide-out-to-left 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "slide-in-from-right": "slide-in-from-right 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "slide-out-to-right": "slide-out-to-right 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "zoom-in": "zoom-in 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "zoom-out": "zoom-out 0.3s cubic-bezier(0.4,0,0.2,1) both",
        "pulse": "pulse 1.2s cubic-bezier(0.4,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
