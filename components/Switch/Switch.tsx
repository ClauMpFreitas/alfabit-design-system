import { useState } from "react";
import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

import useStyle from "./Switch.style";
import React from "react";

export type SwitchProps = {
  defaultEnabled?: boolean;
  variant?: "common" | "contract";
  disabled?: boolean;
  onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;

const Switch = ({
  defaultEnabled: enabledByDefault,
  variant = "common",
  disabled,
  onChange,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault);
  const style = useStyle({ variant, disabled, enabled });

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState);
  };

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={toggle}
      className={style.Container}
      disabled={disabled}
      {...rest}
    >
      <span className="sr-only">switch toggle</span>
      {variant === "common" && <span className={style.Switch} />}
      {variant === "contract" && (
        <span className={style.Switch}>
          {enabled && (
            <CheckIcon aria-disabled={disabled} className={style.Icon} />
          )}
          {enabled || (
            <XMarkIcon aria-disabled={disabled} className={style.Icon} />
          )}
        </span>
      )}
    </HeadlessSwitch>
  );
};

export default Switch;
