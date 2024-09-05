import React from "react";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../types/common";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  { color?: Rainbow | "black" }
>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactNode | null;

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType>(
    { as, color, children }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";

    const style = color ? { style: { color } } : {};

    return (
      <Component ref={ref} {...style}>
        {children}
      </Component>
    );
  }
);
