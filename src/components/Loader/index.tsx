import React from 'react';
import { LoaderProps } from './props';
import './styles.css';

// TODO: Documentation
const Loader: React.FC<LoaderProps> = ({
  kind = 'primary',
  role = 'alert',
  size = 'default',
  velocity = 'default',
  animation = 'default',
  'aria-busy': ariaBusy = true,
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
    return classes.join(' ');
  };

  return (
    <span
      className={getClasses()}
      role={role}
      aria-busy={ariaBusy}
      {...props}
    />
  );
};

export default Loader;
