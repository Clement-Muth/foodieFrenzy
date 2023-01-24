import { Box, Flex, Text } from "components";
import { useTheme } from "libraries/theme";
import { ScrollView } from "react-native";

import { Card } from "./card";

export const Popuplar = () => {
  const { colors } = useTheme();

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" px={20}>
        <Text fontSize={18}>Popuplar Items</Text>
        <Text fontSize={12} color={colors.orange}>
          View More
        </Text>
      </Flex>
      <ScrollView
        style={{ marginTop: 30 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 60 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Card
          title="Gergrilltes Steak"
          subTitle="Steak with snack"
          price={12.5}
          source={require("public/static/images/food/gergrilltes-steak.png")}
        />
        <Card
          title="Grilled Stake Meat"
          subTitle="Yummy steak meal"
          price={7.5}
          source={require("public/static/images/food/grilled-stake-meat.png")}
          ml={20}
        />
      </ScrollView>
    </Box>
  );
};
