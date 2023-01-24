import type { SvgProps } from "react-native-svg";

export interface IconProps extends SvgProps {
  width?: number;
  height?: number;
  size?: number;
  fill?: string;
}

export { default as Add } from "./Add";
export { default as Align } from "./Align";
export { default as Bag } from "./Bag";
export { default as BagFilled } from "./Bag/BagFilled";
export { default as Balance } from "./Balance";
export { default as Bell } from "./Bell";
export { default as BellFilled } from "./Bell/BellFilled";
export { default as Card } from "./Card";
export { default as Clock } from "./Clock";
export { default as Freeze } from "./Freeze";
export { default as Heart } from "./Heart";
export { default as HeartFilled } from "./Heart/HeartFilled";
export { default as Home } from "./Home";
export { default as HomeFilled } from "./Home/HomeFilled";
export { default as Key } from "./Key";
export { default as Limite } from "./Limite";
export { default as Message } from "./Message";
export { default as More } from "./More";
export { default as Search } from "./Search";
export { default as Security } from "./Security";
export { default as State } from "./State";
export { default as Switch } from "./Switch";
export { default as Wallet } from "./Wallet";
