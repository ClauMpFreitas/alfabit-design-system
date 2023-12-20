import classNames from "classnames";
import AvatarImage from "./AvatarImage";
import AvatarIcon from "./AvatarIcon";
import React from "react";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  descricao?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const sizeAvatarMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

const Avatar = ({
  size = "xs",
  image,
  descricao = "",
  className,
  ...rest
}: AvatarProps) => {
  const avatarSizeClass = sizeAvatarMap[size] || sizeAvatarMap.xs;

  const avatarComponent = image ? (
    <AvatarImage src={image} altDesciption={descricao} />
  ) : (
    <AvatarIcon />
  );

  return (
    <div
      className={classNames(
        "relative rounded-full bg-slate-100 flex items-center justify-center",
        avatarSizeClass,
        className
      )}
      {...rest}
    >
      {avatarComponent}
    </div>
  );
};

export default Avatar;
