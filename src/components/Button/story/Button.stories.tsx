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
  icon,
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
    icon={icon}
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
  iconPosition: 'left',
  loading: false,
  iconOnly: false,
  block: false,
  icon: null,
} as ButtonProps;

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: 'Icon',
} as ButtonProps;

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
} as ButtonProps;

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
} as ButtonProps;
