import { useTheme } from "@react-navigation/native";
import { type FC } from "react";
import type { TextProps as TextReactProps, TextStyle } from "react-native";
import { Text as TextC } from "react-native";

import { defaultProps } from "../../libraries/rebass";
import type { RebassBase } from "../../types";
import { removeEmpty } from "../../utils/removeEmpty";
import { textStyle } from "./Text.style";

export type TextProps = RebassBase<TextStyle>;

const Text: FC<TextProps> = ({ color, ...props }) => {
  const { colors } = useTheme();

  return (
    <TextC
      style={{
        ...textStyle(colors, color as string),
        // @ts-ignore
        ...removeEmpty(defaultProps<TextReactProps>(props))
      }}
    >
      {props.children}
    </TextC>
  );
};

export default Text;
