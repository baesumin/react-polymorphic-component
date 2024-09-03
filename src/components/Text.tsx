import { ReactNode } from "react";

export const Text = <C extends React.ElementType>({
  as,
  children,
}: {
  as?: C;
  children: ReactNode;
}) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};
