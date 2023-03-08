import { ReactNode } from "react";
export interface AlertProps {
  children: string | ReactNode;
}
export const Alert = (props: AlertProps) => {
  return <div>{props.children}</div>;
};
