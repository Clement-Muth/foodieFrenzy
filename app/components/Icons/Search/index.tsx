import type { FC } from "react";
import { Path, Svg } from "react-native-svg";

import type { IconProps } from "..";

const SearchIcon: FC<IconProps> = ({ ...props }) => (
  <Svg viewBox="0 0 16 16" width={props.size || 16} height={props.size || 16} {...props}>
    <Path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></Path>
  </Svg>
);

export default SearchIcon;
