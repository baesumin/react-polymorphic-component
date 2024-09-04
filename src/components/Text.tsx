import React, { ForwardedRef } from "react";

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

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>;

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  P
> = PolymorphicComponentProps<C, P> & {
  ref?: PolymorphicRef<C>;
};

type TextComponent = <C extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<C, TextProps>
) => React.ReactElement | null;

export const Text = React.forwardRef(
  <C extends React.ElementType = "span">(
    { as, style, color, children, ...restProps }: Props<C, TextProps>,
    ref?: React.ComponentPropsWithRef<C>["ref"]
  ) => {
    const Component = as || "span";

    const internalStyles = color ? { style: { ...style, color } } : {};
    return (
      <Component
        ref={ref as React.Ref<unknown>}
        {...restProps}
        {...internalStyles}
      >
        {children}
      </Component>
    );
  }
);
