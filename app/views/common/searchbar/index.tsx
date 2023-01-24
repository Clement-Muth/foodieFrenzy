import { type FlexProps, Flex } from "components";
import { useTheme } from "libraries/theme";
import type { FC } from "react";
import { TextInput } from "react-native";

type SearchbarProps = FlexProps;

export const Searchbar: FC<SearchbarProps> = (props) => {
  const { colors } = useTheme();

  return (
    <Flex {...props}>
      <TextInput
        placeholder="Search"
        style={{
          backgroundColor: colors.lightGrey,
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 15,
          fontSize: 16,
          width: "100%"
        }}
      />
    </Flex>
  );
};
