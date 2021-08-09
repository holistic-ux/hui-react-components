import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { components } from '../../../stories/_utils/sections';
import Loader from '../index';
import { LoaderProps } from '../props';
import '../styles.css';

export default {
  title: `${components}/Loader/Loader`,
  component: Loader,
} as Meta;

const Template: Story<LoaderProps> = ({ kind, size, ...args }) => (
  <Loader kind={kind} size={size} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  kind: 'primary',
  size: 'normal',
  animation: 'default',
  velocity: 'default',
} as LoaderProps;
