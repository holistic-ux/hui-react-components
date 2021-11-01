import { HTMLAttributes } from 'react';
import { Kind, Size } from '../utils/types';

export interface LoaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * Default: 'primary' |
   * Specifies the loader style color with a string.
   */
  kind?: Kind;
  /**
   * Default: 'default' |
   * Specifies the loader size with a string.
   */
  size?: Size | 'bigger';
  /**
   * Default: 'default' |
   * Specifies the loader size with a string.
   */
  velocity?: 'default' | 'fast' | 'slow';
  /**
   * Default: 'default' |
   * Specifies the loader velocity with a string.
   */
  animation?: 'default' | 'lineal' | 'ease' | 'ease-in-out';
  /**
   * Default: 'default' |
   * Specifies the css animation-timing-function with a string.
   */
}
