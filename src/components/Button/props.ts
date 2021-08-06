/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, ButtonHTMLAttributes, ReactNode } from 'react';
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
  /**
   * Default: 'primary' |
   * Specify the button style color with a string
   */
  kind?: Kind;
  /**
   * Default: 'normal' |
   * Specify the border radius, ex: 'rounded', 'normal' (some cases normal is the same that rounded) or 'squared'.
   */
  shape?: Shape;
  /**
   * Default: 'normal' |
   * Specify the button size with a string.
   */
  size?: Size;
  /**
   * Default: 'undecorated' |
   * Specify design style button with a string.
   */
  typeStyle?: TypeStyle;
  /**
   *Default: false |
   * Make button uses all horizontal space available.
   */
  block?: boolean;
  /**
   * Default: false |
   * This prop sets disable html attr as true.
   */
  disabled?: boolean;
  /**
   * Default: false |
   * Specify if the button has initiated an action and must wait for it (this prop automatically sets the disable html attribute as true).
   */
  loading?: boolean;
  /**
   * Default: 'button' |
   * This is the html element to render, it could be 'a', 'button' or any react component that you need, ex: react router link.
   */
  renderElement?: 'button' | 'a' | ComponentType<any>;
  /**
   * Default: 'button' |
   * This is the type html attr with a string.
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * Default: null |
   * You can use this props to send a string with you custom css classes.
   */
  className?: string;
  /**
   * Default: null |
   * Send the HUI icon component without any prop, this button will manage it.
   */
  icon?: ReactNode;
  /**
   * Default: false |
   * Specify if the button will only show the icon and not the children react prop, the icon prop must be already set for this action.
   */
  iconOnly?: boolean;
  /**
   * Default: 'left' |
   * Specify the icon position in the button, it could be 'right' or 'left'.
   */
  iconPosition?: IconPosition;
  /**
   * Default: null |
   * Specify target fot <a> renderElement.
   */
  target?: Target;
  /**
   * Default: null |
   * Specify href fot <a> renderElement.
   */
  href?: string;
  /**
   * Default: null |
   * Specify the to attr for link component ex: react router link or next link.
   */
  to?: string;
}
