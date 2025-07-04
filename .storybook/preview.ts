import "../src/app/globals.css";
import theme from "./theme";
import { themes } from '@storybook/theming';

const preview = {
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
            ["Input", "Select", "Notice", "Switch", "Link", "Loading"],
            "Organisms",
            ["Header", "Modal", "Dropdown", "TitlePage", "SubtitlePage"],
            "Templates",
            ["PageLayout", "AuthLayout"],
            "Pages"
          ]
        ],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
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
    darkMode: {
      classTarget: 'body',
      darkClass: 'dark-theme',
      lightClass: '',
      stylePreview: true,
      dark: { ...themes.dark, appBg: '#1a1a1a' },
      light: { ...themes.normal, appBg: '#fff', background: '#fff' },
    },
  },
};

export default preview; 