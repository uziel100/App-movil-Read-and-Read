import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Search from "../screens/Search";
import colors from "../styles/colors";

const Stack = createStackNavigator();

export default function BookStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.fontLight,
                headerStyle: { backgroundColor: colors.accent },
                cardStyle: {
                    backgroundColor: colors.bgLight,
                },
            }}
        >
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="search"
                component={Search}
                options={{
                    title: "Resultados",
                }}
            />
        </Stack.Navigator>
    );
}
