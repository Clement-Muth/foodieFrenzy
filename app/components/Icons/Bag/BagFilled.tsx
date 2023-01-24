import type { FC } from "react";
import { Path, Svg } from "react-native-svg";

import type { IconProps } from "..";

const BagFilledIcon: FC<IconProps> = ({ ...props }) => (
  <Svg viewBox="0 0 25 25" fill="white" width={props.size || 30} height={props.size || 30} {...props}>
    <Path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z" />
  </Svg>
);

export default BagFilledIcon;
