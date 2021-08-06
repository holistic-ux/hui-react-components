// General styles
import '../src/assets/styles/main.css';
import { themes, ThemeVars } from '@storybook/theming';

const primary = '#0080ff';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    current: 'light',
    light: {
      ...themes.normal,
      appBg: '#f9fcff',
      brandTitle: 'Holistic UI Components',
      brandUrl: 'https://github.com/holistic-ux/hui-react-components',
      brandImage: 'https://place-hold.it/350x150',
      colorPrimary: primary,
      barSelectedColor: primary,
      inputBorderRadius: 9999,
      barSelectedColor: primary,
    },
    dark: {
      ...themes.dark,
      brandTitle: 'Holistic UI Components',
      brandUrl: 'https://github.com/holistic-ux/hui-react-components',
      brandImage: 'https://place-hold.it/350x150',
      colorPrimary: primary,
      barSelectedColor: primary,
      inputBorderRadius: 9999,
      barSelectedColor: primary,
    },
  },
};
