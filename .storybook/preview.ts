import type { Preview } from "@storybook/nextjs";
import "../src/app/globals.css";
import theme from "./theme";

const preview: Preview = {
  parameters: {
    docs: {
      theme: theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        locales: "pt-BR",
        order: [
          // Documentação
          "Docs",
          ["Introduction", "Getting Started", "Design Tokens", "Colors", "Typography", "Spacing", "Shadows"],

          // Atoms
          "Atoms",
          ["Avatar", "Badge", "Box", "Button", "Divider", "Text", "Typography"],

          // Molecules
          "Molecules",
          ["Input", "Link", "Loading", "Notice", "Switch"],

          // Organisms
          "Organisms",
          ["Dropdown", "Modal", "TitlePage", "SubtitlePage"],

          // Templates
          "Templates",

          // Pages
          "Pages",

          // Examples
          "Examples",
        ],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
        {
          name: 'gray',
          value: '#f5f5f5',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
};

export default preview;
