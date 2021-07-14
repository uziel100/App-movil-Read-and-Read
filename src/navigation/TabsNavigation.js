import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import AccountStack from "./AccountStack";
import colors from "../styles/colors";
import Book from "../screens/Book";
import WishList from "../screens/WishList";

const Tab = createMaterialBottomTabNavigator();

export default function TabsNavigation() {
    return (
        <Tab.Navigator
            barStyle={styles.navigation}
            activeColor={colors.activeColorNavigation}
            inactiveColor={colors.inctiveColorNavigation}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    return setIcon(route, color, focused);
                },
            })}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    title: "Inicio",
                }}
            />
            <Tab.Screen
                name="book"
                component={Book}
                options={{
                    title: "Tus libros",
                }}
            />
            <Tab.Screen
                name="wishlist"
                component={WishList}
                options={{
                    title: "Lista de deseos",
                }}
            />
            <Tab.Screen
                name="account"
                component={AccountStack}
                options={{
                    title: "Cuenta",
                }}
            />
        </Tab.Navigator>
    )
}

const setIcon = (route, color, focused) => {
    let iconName = "";

    switch (route.name) {
        case "home":
            iconName = focused ? "home" : "home-outline";
            break;
        case "wishlist":
            iconName = focused ? "heart" : "heart-outline";
            break;
        case "book":
            iconName = focused ? "book" : "book-outline";
            break;
        case "account":
            iconName = focused ? "person" : "person-outline";
            break;
        default:
            break;
    }

    return <IoniconsIcon name={iconName} color={color} style={styles.icon} />;
};

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.bgNavigation,
    },
    icon: {
        fontSize: 19,
    },
});
