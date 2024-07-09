import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'clickable/Button',
  component: Button,
  decorators: [],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Template: Story = {
  render(props) {
    return <Button {...props} />;
  },
};
