import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        title: "Table of Contents",
        headingSelector: "h1, h2, h3",
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        locales: "en-US",
        order: [
          "Foundations",
          ["Overview", "Colors", "Typography", "Spacing", "Shadows"],
          "Docs",
          ["Design Tokens", "Colors"],
          "Guides",
          ["Styling", "Accessibility", "Theming"],
          "Components",
          [
            "Atoms",
            ["Avatar", "Badge", "Box", "Button", "Divider", "Text", "Typography"],
            "Molecules",
            ["Input", "Link", "Loading", "Notice", "Switch"],
            "Organisms",
            ["Dropdown", "Header", "Modal", "SubtitlePage", "TitlePage"],
            "Templates",
          ],
        ],
      },
    },
  },
};

export default preview; 