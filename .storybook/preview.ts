import type { Preview } from "@storybook/react";
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
  },
};

export default preview;
