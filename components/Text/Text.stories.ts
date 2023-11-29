import { Meta, StoryObj } from "@storybook/react";

import Text, { type TextProps } from "./Text";

const meta: Meta<TextProps> = {
  title: "Desing System/Atoms/Text",
  component: Text,
  argTypes: {
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextProps> = {
  args: {
    children: "Texto",
  },
};

export const TextHeadingH1: StoryObj<TextProps> = {
  args: {
    children: "Texto",
    element: "h1",
    size: "title1",
    className: "font-extrabold",
  },
};

export const TextHeadingH2: StoryObj<TextProps> = {
  args: {
    children: "Texto",
    element: "h2",
    size: "title2",
    className: "font-extrabold",
  },
};

export const TextHeadingH3: StoryObj<TextProps> = {
  args: {
    children: "Texto",
    element: "h3",
    size: "title3",
    className: "font-extrabold",
  },
};

export const TextParagraph: StoryObj<TextProps> = {
  args: {
    children: "Texto",
    element: "p",
    size: "md",
    className: "text-primary",
  },
};
