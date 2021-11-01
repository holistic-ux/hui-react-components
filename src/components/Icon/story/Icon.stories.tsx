import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { components } from '../../../stories/_utils/sections';
import Icon from '../index';
import { IconProps } from '../props';
import '../styles.css';

export default {
  title: `${components}/Icon/Icon`,
  component: Icon,
} as Meta;

const Template: Story<IconProps> = ({
  name,
  kind,
  size,
  specificSize,
  solid,
  hoverTransition,
  ...args
}) => (
  <Icon
    name={name}
    kind={kind}
    size={size}
    specificSize={specificSize}
    solid={solid}
    hoverTransition={hoverTransition}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  name: 'cake',
  kind: 'primary',
  size: 'normal',
} as IconProps;

export const SpecificSize = Template.bind({});
SpecificSize.args = {
  ...Default.args,
  specificSize: '500px',
} as IconProps;

export const WithHover = Template.bind({});
WithHover.args = {
  ...Default.args,
  hoverTransition: true,
} as IconProps;

export const Solid = Template.bind({});
Solid.args = {
  ...Default.args,
  solid: true,
} as IconProps;
