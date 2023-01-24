import type { FC } from "react";
import { Path, Svg } from "react-native-svg";

import type { IconProps } from "..";

const AlignIcon: FC<IconProps> = ({ ...props }) => (
  <Svg viewBox="0 0 24 24" fill="white" width={30} height={30} {...props}>
    <Path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" />
  </Svg>
);

export default AlignIcon;
