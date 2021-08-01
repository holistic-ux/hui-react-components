import { ComponentType, ButtonHTMLAttributes } from 'react';
import { Kind, Shape, Size } from '../utils/types';

export type TypeStyle =
  | 'decorated'
  | 'undecorated'
  | 'ghost'
  | 'outline'
  | 'dashed';
export type IconPosition = 'right' | 'left';
export type Target = '_blank' | '_self' | '_parent' | '_top' | 'framename';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: Kind;
  shape?: Shape;
  size?: Size;
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
