/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, ButtonHTMLAttributes } from 'react';
import { Kind, Shape, Size } from '../utils/types';
import { IconProps } from '../Icon/props';

export type TypeStyle =
  | 'decorated'
  | 'undecorated'
  | 'ghost'
  | 'ghost-decorated'
  | 'outline'
  | 'dashed';
export type IconPosition = 'right' | 'left';
export type Target = '_blank' | '_self' | '_parent' | '_top' | 'framename';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Default: 'primary' |
   * Specifies the button style color with a string.
   */
  kind?: Kind;
  /**
   * Default: 'default' |
   * Specifies the border radius, ex: 'rounded', 'default' (some cases default is the same that rounded) or 'squared'.
   */
  shape?: Shape;
  /**
   * Default: 'normal' |
   * Specifies the button size with a string.
   */
  size?: Size;
  /**
   * Default: 'undecorated' |
   * Specifies design style button with a string.
   */
  typeStyle?: TypeStyle;
  /**
   *Default: false |
   * Makes the button use all available horizontal space.
   */
  block?: boolean;
  /**
   * Default: false |
   * This prop sets the disable html attr as true.
   */
  disabled?: boolean;
  /**
   * Default: false |
   * Specifies if the button has initiated an action and must wait for it (this prop automatically sets the disable html attribute as true).
   */
  loading?: boolean;
  /**
   * Default: 'button' |
   * This is the html element to render, it could be 'a', 'button' or any react component that you need, ex: react router link.
   */
  renderElement?: 'button' | 'a' | ComponentType<any>;
  /**
   * Default: 'button' |
   * This is the 'type' html attr.
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * Default: null |
   * You can use this props to send a string with you custom css classes.
   */
  className?: string;
  /**
   * Default: null |
   * Send the HUI icon name, this button will manage it.
   */
  icon?: IconProps['name'];
  /**
   * Default: false |
   * Specifies if the button will only show the icon and not the children react prop, the icon prop must be already set for this action.
   */
  onlyIcon?: boolean;
  /**
   * Default: 'left' |
   * Specifies the icon position in the button, it could be 'right' or 'left'.
   */
  iconPosition?: IconPosition;
  /**
   * Default: null |
   * Specifies target fot <a> renderElement.
   */
  target?: Target;
  /**
   * Default: null |
   * Specifies href fot <a> renderElement.
   */
  href?: string;
  /**
   * Default: null |
   * Specifies the to attr for link component ex: react router link or next link.
   */
  to?: string;
}
