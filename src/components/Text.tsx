import { ReactNode } from "react";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: Rainbow | "black";
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

export const Text = <C extends React.ElementType = "span">({
  as,
  style,
  color,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || "span";

  const internalStyles = color ? { style: { ...style, color } } : {};
  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  );
};
