import React from 'react';
import { LoaderProps } from './props';
import './styles.css';

/**
 * Holistic UI Loader Component
 * @see {@link https://todo.com/} for official documentation.
 * @param kind
 * Default: 'primary' |
 * Specifies the loader style color with a string.
 * @param size
 * Default: 'normal' |
 * Specifies the loader size with a string.
 * @param velocity
 * Default: 'default' |
 * Specifies the loader animation velocity with a string.
 * @param animation
 * Default: 'default' |
 * Specifies the css animation-timing-function with a string.
 * @param className
 * Default: null |
 * You can use this prop to send a string with your custom css classes.
 * @returns
 * A HUI loader react component
 */
const Loader: React.FC<LoaderProps> = ({
  kind = 'primary',
  role = 'alert',
  size = 'normal',
  velocity = 'default',
  animation = 'default',
  'aria-busy': ariaBusy = true,
  className,
  title = 'Loader',
  ...props
}) => {
  const prefix = 'hui-loader';

  const getClasses = (): string => {
    const classes: string[] = [
      `${prefix}`,
      `${prefix}--${kind}`,
      `${prefix}--${size}-size`,
      `${prefix}--${velocity}-velocity`,
      `${prefix}--${animation}-timing-function`,
    ];
    className && classes.push(className);
    return classes.join(' ');
  };

  return (
    <span
      className={getClasses()}
      role={role}
      aria-busy={ariaBusy}
      title={title}
      {...props}
    />
  );
};

export default Loader;
