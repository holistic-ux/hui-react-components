import React from 'react';
import KindInterface from '../_utils/interfaces/KindInterface';
import ShapeInterface from '../_utils/interfaces/ShapeInterface';
import DisabledInterface from '../_utils/interfaces/DisabledInterface';
import ChildrenInterface from '../_utils/interfaces/ChildrenInterface';
import SizeInterface from '../_utils/interfaces/SizeInterface';
import { Type, IconPosition, HtmlType, Target } from './types';

export default interface ButtonProps
  extends KindInterface,
    ShapeInterface,
    DisabledInterface,
    ChildrenInterface,
    SizeInterface {
  renderElement?: 'button' | 'a' | React.FC<any>;
  type?: Type;
  iconPosition?: IconPosition;
  iconOnly?: boolean;
  block?: boolean;
  loading?: boolean;
  tabIndex?: number | false;
  onClick?: () => void;
  icon?: React.ReactNode;
  htmlType?: HtmlType;
  target?: Target;
  href?: string;
  to?: string;
  className?: string;
}
