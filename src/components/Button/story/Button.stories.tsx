import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { components } from '../../../stories/_utils/sections';
import Button from '../index';
import { ButtonProps } from '../props';
import '../styles.css';

export default {
  title: `${components}/Button/Button`,
  component: Button,
  argTypes: {
    renderElement: {
      options: ['button', 'a'],
    },
    onClick: { action: 'onClick', table: { disable: true } },
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
  onClick,
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
    onClick={onClick}
    {...args}
  >
    Hello Word
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  kind: 'primary',
  typeStyle: 'undecorated',
  shape: 'default',
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
