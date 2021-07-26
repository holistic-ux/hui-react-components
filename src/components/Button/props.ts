import { ComponentType, ButtonHTMLAttributes } from 'react';
import KindInterface from '../_utils/interfaces/KindInterface';
import ShapeInterface from '../_utils/interfaces/ShapeInterface';
import DisabledInterface from '../_utils/interfaces/DisabledInterface';
import SizeInterface from '../_utils/interfaces/SizeInterface';
import { TypeStyle, IconPosition, Target } from './types';

export default interface ButtonProps
  extends KindInterface,
    ShapeInterface,
    DisabledInterface,
    SizeInterface,
    ButtonHTMLAttributes<HTMLButtonElement> {
  renderElement?: 'button' | 'a' | ComponentType<any>;
  typeStyle?: TypeStyle;
  iconPosition?: IconPosition;
  iconOnly?: boolean;
  block?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  target?: Target;
  href?: string;
  to?: string;
  className?: string;
}
