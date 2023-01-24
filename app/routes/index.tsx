import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {
  Bag,
  BagFilled,
  Bell,
  BellFilled,
  Box,
  Flex,
  Heart,
  HeartFilled,
  Home,
  HomeFilled,
  Search,
  Text
} from "../components";
import { useTheme } from "../libraries/theme";
import HomePage from "../pages";

const Tab = createBottomTabNavigator();

export const Browser = () => {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 64,
            borderTopWidth: 0,
            elevation: 0,
            paddingBottom: 5,
            paddingTop: 5
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Flex alignItems="center" flexDirection="column" position="relative">
                {!focused ? (
                  <Home fill={colors.orange} size={25} />
                ) : (
                  <>
                    <HomeFilled fill={colors.orange} size={25} />
                    <Text mt={-7} fontSize={20} color={colors.orange} position="absolute" bottom={-17}>
                      •
                    </Text>
                  </>
                )}
              </Flex>
            )
          }}
        />
        <Tab.Screen
          name="love"
          component={HomePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Flex alignItems="center" flexDirection="column" position="relative">
                {!focused ? (
                  <Heart fill={colors.grey} size={25} />
                ) : (
                  <>
                    <HeartFilled fill={colors.orange} size={25} />
                    <Text mt={-7} fontSize={20} color={colors.orange} position="absolute" bottom={-17}>
                      •
                    </Text>
                  </>
                )}
              </Flex>
            )
          }}
        />
        <Tab.Screen
          name="search"
          component={HomePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Box
                bg={colors.orange}
                borderRadius={50}
                p={22}
                mt={-35}
                shadowColor={colors.orange}
                shadowOpacity={0}
                elevation={7}
              >
                <Search fill="white" size={20} />
              </Box>
            )
          }}
        />
        <Tab.Screen
          name="notif"
          component={HomePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Flex alignItems="center" flexDirection="column" position="relative">
                {!focused ? (
                  <Bell fill={colors.grey} size={25} />
                ) : (
                  <>
                    <BellFilled fill={colors.orange} size={25} />
                    <Text mt={-7} fontSize={20} color={colors.orange} position="absolute" bottom={-17}>
                      •
                    </Text>
                  </>
                )}
              </Flex>
            )
          }}
        />
        <Tab.Screen
          name="balance"
          component={HomePage}
          options={{
            tabBarBadge: 2,
            tabBarBadgeStyle: {
              backgroundColor: colors.red,
              marginTop: 15,
              fontSize: 10
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Flex alignItems="center" flexDirection="column" position="relative">
                {!focused ? (
                  <Bag fill={colors.grey} size={25} />
                ) : (
                  <>
                    <BagFilled fill={colors.orange} size={25} />
                    <Text mt={-7} fontSize={20} color={colors.orange} position="absolute" bottom={-17}>
                      •
                    </Text>
                  </>
                )}
              </Flex>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
