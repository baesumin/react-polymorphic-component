import { ReactNode } from "react";

type TextProps<C extends React.ElementType> = {
  as?: C;
  children: ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const Text = <C extends React.ElementType>({
  as,
  children,
}: TextProps<C>) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};
