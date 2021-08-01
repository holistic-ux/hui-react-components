import React from 'react';
import { ButtonProps } from './props';
import './styles.css';

const Button: React.FC<ButtonProps> = ({
  block = false,
  disabled = false,
  loading = false,
  iconOnly = false,
  kind = 'primary',
  shape = 'normal',
  iconPosition = 'left',
  renderElement = 'button',
  size = 'normal',
  typeStyle = 'undecorated',
  type = 'button',
  className,
  children,
  icon,
  ...props
}) => {
  const Btn = renderElement;
  const prefix = 'hui-button';

  const getClasses = (): string => {
    const classes: string[] = [
      `${prefix}`,
      `${prefix}--${kind}`,
      `${prefix}--${shape}-shape`,
      `${prefix}--${size}-size`,
      `${prefix}--${typeStyle}-type`,
    ];

    block && classes.push(`${prefix}--block`);
    icon && classes.push(`${prefix}__container--${iconPosition}-icon`);
    disabled && classes.push(`${prefix}--disabled`);
    className && classes.push(className);

    return classes.join(' ');
  };

  return (
    <Btn disabled={disabled} type={type} {...props} className={getClasses()}>
      <div role="grid" className={`${prefix}__container`}>
        {icon && <div role="banner">icon</div>}
        {!iconOnly && !loading && <div>{children}</div>}
      </div>
    </Btn>
  );
};

export default Button;
