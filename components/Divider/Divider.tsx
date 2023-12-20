import React from "react";
import classNames from "classnames";

export type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: "light" | "dark" | "black";
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const colorClassMap = {
  dark: "bg-dark",
  light: "bg-light",
  black: "bg-black",
};

const Divider = ({
  children,
  width,
  height = "h-[1px]",
  bgColor = "black",
  ...rest
}: DividerProps) => {
  const colorClass = colorClassMap[bgColor];
  const barClasses = classNames(
    children ? "w-1/3" : "w-1/2",
    height,
    colorClass
  );

  return (
    <div
      className={classNames(width, "flex items-center justify-center")}
      {...rest}
    >
      <div className={barClasses}></div>
      {children && <div className="px-3">{children}</div>}
      <div className={barClasses}></div>
    </div>
  );
};

export default Divider;
