import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, ErrorPage } from "../screens";
import { ColorfulTabBar as TabBar } from 'react-navigation-tabbar-collection';

import { Feather } from "@expo/vector-icons";
import { BACKGROUND_COLOR, ICON_COLOR, ICON_FOCUSED_COLOR, NAV_BACKGROUND_COLOR, NAV_BORDER_COLOR } from "../constants/colors";
import { useTemp } from "../context/TempartureContext";

const Tab = createBottomTabNavigator();
export default function RootNavigator() {
  const {FetchError} = useTemp();
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    position: "absolute",
                    bottom: "2%",
                    left: "3%",
                    right: "3%",
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: NAV_BORDER_COLOR,
                    backgroundColor: NAV_BACKGROUND_COLOR,
                    borderTopWidth: 2,
                    borderTopColor: NAV_BORDER_COLOR,
                },
            }}
            tabBar={(props) => <TabBar
                colorPalette={{
                    primary: NAV_BACKGROUND_COLOR,
                    secondary: "#6c757d",
                    success: "#198754",
                    danger: "#c9379d",
                    warning: "#e6a919",
                    info: "#00bcd4",
                    light: "rgba(256,256,256,0.9);",
                    dark: BACKGROUND_COLOR,
                }}
                maxWidth={320} height={85} darkMode={true} {...props}
            />}
        >
            {FetchError?<Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        const c = focused ? ICON_FOCUSED_COLOR : ICON_COLOR;
                        return (
                            <View >
                                <Feather
                                    name='home'
                                    size={24}
                                    color={color}
                                />
                            </View>
                        );
                    },
                }}
                name='Home'
                component={ErrorPage}
            />:<Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        const c = focused ? ICON_FOCUSED_COLOR : ICON_COLOR;
                        return (
                            <View >
                                <Feather
                                    name='home'
                                    size={24}
                                    color={color}
                                />
                            </View>
                        );
                    },
                }}
                name='Home'
                component={Home}
            />}
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        const c = focused ? ICON_FOCUSED_COLOR : ICON_COLOR;
                        return (
                            <View>
                                <Feather
                                    name='search'
                                    size={24}
                                    color={color}
                                />
                            </View>
                        );
                    },
                }}
                name='Search'
                component={Search}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}