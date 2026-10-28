import styles from './Button.module.css';

/**
 * Link-or-button with consistent styling.
 * Pass `href` to render an <a>; `external` opens it in a new tab safely.
 */
export default function Button({
  href,
  external = false,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ');
  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </>
  );

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
