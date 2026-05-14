import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  as: Component = "button",
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
