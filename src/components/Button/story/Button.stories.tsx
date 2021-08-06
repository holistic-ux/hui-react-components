import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '../index';
import { ButtonProps } from '../props';
import '../styles.css';

export default {
  title: '02 Components/Button/Component',
  component: Button,
  parameters: {
    layout: 'padded',
    fileName: 'HUI Button',
  },
  argTypes: {
    renderElement: {
      options: ['button', 'a'],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = ({
  kind,
  typeStyle,
  shape,
  renderElement,
  size,
  iconPosition,
  loading,
  iconOnly,
  block,
  ...args
}) => (
  <Button
    kind={kind}
    typeStyle={typeStyle}
    shape={shape}
    renderElement={renderElement}
    size={size}
    iconPosition={iconPosition}
    loading={loading}
    iconOnly={iconOnly}
    block={block}
    {...args}
  >
    Hello Word
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  kind: 'primary',
  typeStyle: 'undecorated',
  shape: 'normal',
  renderElement: 'button',
  size: 'normal',
  iconPosition: 'right',
  loading: false,
  iconOnly: false,
  block: false,
} as ButtonProps;

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
} as ButtonProps;
