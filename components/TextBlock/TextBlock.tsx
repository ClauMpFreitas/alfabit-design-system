import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";

export type TextBlockProps = {
  title?: string;
  type?: "primary" | "secondary" | "dark";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const TextBlock = ({
  title,
  type = "dark",
  children,
  className,
  ...rest
}: TextBlockProps) => {
  const textClass = type === "primary" ? "text-white" : "text-gray-primary";
  return (
    <Box className="flex flex-col gap-2 p-5 " type={type} rounded {...rest}>
      <Text className={`font-bold ${textClass}`} size="xl">
        {title}
      </Text>
      <Text className={textClass}>{children}</Text>
    </Box>
  );
};

export default TextBlock;
