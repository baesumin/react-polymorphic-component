type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = object
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TextProps = { color?: Rainbow | "black" };

export const Text = <C extends React.ElementType = "span">({
  as,
  style,
  color,
  children,
  ...restProps
}: PolymorphicComponentProps<C, TextProps>) => {
  const Component = as || "span";

  const internalStyles = color ? { style: { ...style, color } } : {};
  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  );
};
