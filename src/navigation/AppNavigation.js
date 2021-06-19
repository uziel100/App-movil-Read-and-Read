import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";

import Home from "../screens/Home";
import Account from "../screens/Account";
import colors from "../styles/colors";
import Book from "../screens/Book";
import WishList from "../screens/WishList";

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                barStyle={styles.navigation}                
                screenOptions={({ route }) => ({
                    tabBarIcon: (routerStatus) => {
                        return setIcon(route, routerStatus);
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
                    component={ Book }
                    options={{
                        title: "Tus libros",
                    }}
                />
                <Tab.Screen
                    name="wishlist"
                    component={ WishList }
                    options={{
                        title: "Lista de deseos",
                    }}
                />
                <Tab.Screen
                    name="account"
                    component={Account}
                    options={{
                        title: "Cuenta",
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const setIcon = (route, routerStatus) => {
    let iconName = "";

    switch (route.name) {
        case "home":
            iconName = "home";
            break;
        case "wishlist":
            iconName = "heart";
            break;
        case "book":
            iconName = "shopping-cart";
            break;
        case "account":
            iconName = "user";
            break;
        default:
            break;
    }

    return <AwesomeIcon name={iconName} solid style={styles.icon} />;
};

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.primary,
    },
    icon: {
        fontSize: 18,
        color: colors.fontLight,
    },
});
