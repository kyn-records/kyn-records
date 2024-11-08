import { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...args: any[]) => any;
}) => {
  return (
    <button className="rounded-full bg-white bg-opacity-45 p-2 hover:bg-opacity-75 hover:scale-110 transition-all" onClick={onClick}>
      {children}
    </button>
  );
};
