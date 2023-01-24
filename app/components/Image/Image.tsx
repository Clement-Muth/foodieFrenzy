import { defaultProps } from "libraries/rebass";
import { type FC } from "react";
import type { ImageProps as ImageReactProps } from "react-native";
import { Image as ImageC } from "react-native";
import { removeEmpty } from "utils/removeEmpty";

import type { RebassBase } from "../../types";

interface ImageProps extends RebassBase<ImageReactProps> {
  width?: number | string;
  height?: number | string;
  size?: number | string;
}

const Image: FC<ImageProps> = ({ size, width, height, ...props }) => {
  return (
    <ImageC
      {...props}
      style={{
        // @ts-ignore
        ...removeEmpty(defaultProps<ImageReactProps>(props)),
        width: size || width,
        height: size || height
      }}
    />
  );
};

export default Image;
