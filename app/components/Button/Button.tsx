import type { FC } from "react";
import type { TouchableOpacityProps } from "react-native";
import { Text, TouchableOpacity } from "react-native";

import { defaultProps } from "../../libraries/rebass";
import type { RebassBase } from "../../types";
import { removeEmpty } from "../../utils/removeEmpty";
import { buttonStyle } from "./Button.style";

const Button: FC<RebassBase<TouchableOpacityProps> & { color?: string }> = ({ color, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={{
        ...buttonStyle,
        // @ts-ignore Don't know why...
        ...removeEmpty(defaultProps<TouchableOpacityProps>(props))
      }}
    >
      <Text style={{ color: color || "white", fontWeight: "700" }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
