import type { BoxProps } from "components";
import { Box, Flex, Image, Text } from "components";
import { useTheme } from "libraries/theme";
import type { FC } from "react";
import type { ImageSourcePropType } from "react-native";

export interface CardProps extends BoxProps {
  source: ImageSourcePropType;
  title: string;
  subTitle: string;
  price: number;
}

export const Card: FC<CardProps> = ({ title, subTitle, price, source, ...props }) => {
  const { colors } = useTheme();

  return (
    <Box
      position="relative"
      bg="white"
      width={200}
      mt={70}
      borderRadius={30}
      p={20}
      shadowColor="#000"
      shadowOffset={{
        width: 0,
        height: 8
      }}
      shadowOpacity={0.46}
      shadowRadius={11.14}
      elevation={17}
      {...props}
    >
      <Image
        source={source}
        position="absolute"
        top={-70}
        left={30}
        right={0}
        justifyContent="center"
        alignItems="center"
        size={140}
      />
      <Flex mt={70} flexDirection="column" alignItems="center">
        <Text fontWeight="900">{title}</Text>
        <Text color={colors.grey} fontSize={12} mt={6}>
          {subTitle}
        </Text>
        <Text fontSize={22} fontWeight="900" mt={15}>
          ${price}
        </Text>
      </Flex>
    </Box>
  );
};
