import type { Meta, StoryObj } from "@storybook/react";

import Switch, { type SwitchProps } from "./Switch";

const meta: Meta<SwitchProps> = {
  title: "Desing System/Molecules/Switch",
  component: Switch,
  argTypes: {
    defaultEnabled: {
      type: "boolean",
      control: { type: "boolean" },
    },
    disabled: {
      type: "boolean",
      control: { type: "boolean" },
    },
    variant: {
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Primary: Story = {
  args: {},
};

export const CommonEnabled: Story = {
  args: {
    variant: "common",
    defaultEnabled: true,
  },
};

export const CommonNotEnabled: Story = {
  args: {
    variant: "common",
    defaultEnabled: false,
  },
};

export const ContractEnabled: Story = {
  args: {
    variant: "contract",
    defaultEnabled: true,
  },
};

export const ContractNotEnabled: Story = {
  args: {
    variant: "contract",
    defaultEnabled: false,
  },
};

export const CommonEnabledDisabled: Story = {
  args: {
    defaultEnabled: true,
    disabled: true,
  },
};

export const CommonNotEnabledDisabled: Story = {
  args: {
    defaultEnabled: false,
    disabled: true,
  },
};

export const ContractEnabledDisabled: Story = {
  args: {
    variant: "contract",
    defaultEnabled: true,
    disabled: true,
  },
};

export const ContractNotEnabledDisabled: Story = {
  args: {
    variant: "contract",
    defaultEnabled: false,
    disabled: true,
  },
};
