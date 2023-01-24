import type { BoxProps, TextProps } from "components";
import { Align, Box, Flex, Image, Text } from "components";
import { useTheme } from "libraries/theme";
import type { FC } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "views/common/searchbar";

import { categoryItems } from "./constant";
import { Popuplar } from "./popuplar";

interface CategoryBadgeProps extends BoxProps {
  textProps?: TextProps;
  text?: string;
  source?: string;
}

const CategoryBadge: FC<CategoryBadgeProps> = ({ textProps, text, source, ...props }) => {
  return (
    <Flex
      borderRadius={35}
      alignItems="center"
      bg="white"
      px={15}
      py={15}
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 8 }}
      shadowOpacity={0.46}
      shadowRadius={11.14}
      elevation={17}
      {...props}
    >
      {/* @ts-ignore */}
      {source && <Image source={source} size={30} />}
      {text && (
        <Text textAlign="center" ml={source ? 10 : 0} {...textProps}>
          {text}
        </Text>
      )}
    </Flex>
  );
};

export const Home = () => {
  const { colors } = useTheme();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box flex={1} pt={20} bg="white">
        <Box px={20}>
          <Flex justifyContent="space-between">
            <Image source={require("public/static/images/avatar/avatar.png")} size={60} />
            <Box borderRadius={35} borderWidth={2} px={15} py={20} borderColor={colors.lightGrey}>
              <Align fill="black" />
            </Box>
          </Flex>
          <Box mt={20}>
            <Text fontSize={26}>Let&apos;s find{"\n"}food near you</Text>
            <Searchbar mt={20} />
          </Box>
        </Box>
        <Flex width="100%" mt={-30}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ overflow: "hidden" }}
            contentContainerStyle={{ padding: 40, paddingLeft: 20 }}
          >
            <Flex mt={30}>
              {categoryItems(colors).map((props, i) => (
                <CategoryBadge {...props} key={`category-list-item-${i}`} />
              ))}
            </Flex>
          </ScrollView>
        </Flex>
        <Popuplar />
      </Box>
    </ScrollView>
  );
};
