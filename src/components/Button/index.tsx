import React from 'react';
import { ButtonProps } from './props';
import Loader from '../Loader';
import './styles.css';
import { Kind } from '../utils/types';

/**
 * Holistic UI Button Component
 * @see {@link https://todo.com/} for official documentation.
 * @param kind
 * Default: 'primary' |
 * Specifies the button style color with a string.
 * @param shape
 * Default: 'default' |
 * Specifies the border radius, ex: 'rounded', 'normal' (some cases normal is the same that rounded) or 'squared'.
 * @param size
 * Default: 'normal' |
 * Specifies the button size.
 * @param typeStyle
 * Default: 'undecorated' |
 * Specifies design style button.
 * @param block
 * Default: false |
 * Makes the button use all available horizontal space.
 * @param disabled
 * Default: false |
 * This prop sets the disable html attr as true.
 * @param loading
 * Default: false |
 * Specifies if the button has initiated an action and must wait for it (this prop automatically sets the disable html attribute as true).
 * @param renderElement
 * Default: 'button' |
 * This is the html element to render, it could be 'a', 'button' or any react component that you need, ex: react router link.
 * @param type
 * Default: 'button' |
 * This is the 'type' html attr.
 * @param className
 * Default: null |
 * You can use this prop to send a string with your custom css classes.
 * @param children |
 * The classic React children prop.
 * @param icon
 * Default: null |
 * Send the HUI icon component without any prop, this button will manage it.
 * @param iconOnly
 * Default: false |
 * Specifies if the button will only show the icon and not the children react prop, the icon prop must be already set for this action.
 * @param iconPosition
 * Default: 'left' |
 * Specifies the icon position in the button, it could be 'right' or 'left'.
 * @param target
 * Default: null |
 * Specifies target fot <a> renderElement.
 * @param href
 * Default: null |
 * Specifies href fot <a> renderElement.
 * @param to
 * Default: null |
 * Specifies the to attr for link component ex: react router link or next link.
 * @interface ButtonProps
 * This is the custom interface created for this component logic.
 * @interface ButtonHTMLAttributes
 * This interface is inherited from @types/react more info here: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L1957
 * @returns
 * A HUI button react component
 */
const Button: React.FC<ButtonProps> = ({
  kind = 'primary',
  shape = 'default',
  size = 'normal',
  typeStyle = 'undecorated',
  block = false,
  disabled = false,
  loading = false,
  renderElement = 'button',
  type = 'button',
  className,
  children,
  icon,
  iconOnly = false,
  iconPosition = 'left',
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
    icon && classes.push(`${prefix}--${iconPosition}-icon`);
    disabled && classes.push(`${prefix}--disabled`);
    loading && classes.push(`${prefix}--loading`);
    className && classes.push(className);

    return classes.join(' ');
  };

  const getLoaderKind = (buttonKind: Kind): Kind => {
    const loaderKindByButtonKind = {
      primary: 'light',
      secondary: 'light',
      tertiary: 'light',
      success: 'dark',
      warning: 'dark',
      error: 'light',
      dark: 'light',
      light: 'dark',
    };
    if (typeStyle === 'decorated' || typeStyle === 'undecorated') {
      return loaderKindByButtonKind[buttonKind] as Kind;
    }
    return buttonKind as Kind;
  };

  type Child = {
    child: React.ReactNode;
  };
  const Children = ({ child }: Child) => {
    return (
      <>
        {!iconOnly && (
          <div className={`${prefix}__container__child`}>{child}</div>
        )}
      </>
    );
  };

  return (
    <Btn
      disabled={disabled || loading}
      type={type}
      {...props}
      className={getClasses()}
    >
      <div className={`${prefix}__container`}>
        {icon && <div className={`${prefix}__container__icon`}>{icon}</div>}
        <Children child={children} />
        {loading && (
          <Loader
            className={`${prefix}__loader-centered`}
            size={size}
            kind={getLoaderKind(kind)}
          />
        )}
      </div>
    </Btn>
  );
};

export default Button;
