import { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import '../src/styles/index.css'; // replace with the name of your tailwind css file
import { withTheme } from './withTheme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) => {
        return (a.type === 'docs' && b.type === 'docs') || a.id === b.id
          ? 0
          : a.type === 'docs'
            ? -1
            : b.type === 'docs'
              ? 1
              : a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withRouter, withTheme],
};

export default preview;
