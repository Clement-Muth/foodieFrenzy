import { useTheme } from "@react-navigation/native";
import { type FC } from "react";
import type { ViewProps, ViewStyle } from "react-native";
import { View } from "react-native";

import { defaultProps } from "../../libraries/rebass";
import type { RebassBase } from "../../types";
import { removeEmpty } from "../../utils/removeEmpty";
import { boxStyle } from "./Box.style";

export type BoxProps = RebassBase<ViewStyle>;

const Box: FC<BoxProps> = ({ ...props }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...boxStyle(colors),
        // @ts-ignore
        ...removeEmpty(defaultProps<ViewProps>(props))
      }}
    >
      {props.children}
    </View>
  );
};

export default Box;
