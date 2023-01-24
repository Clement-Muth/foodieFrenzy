import type { FC } from "react";
import type { TouchableOpacityProps, ViewProps } from "react-native";
import { View } from "react-native";

import { defaultProps } from "../../libraries/rebass";
import type { RebassBase } from "../../types";
import { removeEmpty } from "../../utils/removeEmpty";
import { flexStyle } from "./Flex.style";

export type FlexProps = RebassBase<ViewProps>;

const Flex: FC<FlexProps> = ({ ...props }) => {
  return (
    <View
      {...props}
      style={{
        ...flexStyle,
        // @ts-ignore Don't know why...
        ...removeEmpty(defaultProps<TouchableOpacityProps>(props))
      }}
    >
      {props.children}
    </View>
  );
};

export default Flex;
