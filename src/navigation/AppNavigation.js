import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ViewBook from "../screens/Book/ViewBook";
import TabsNavigation from "./TabsNavigation";
const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="tabs-app">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="tabs-app"
                    component={TabsNavigation}
                />
                <Stack.Screen name="view-book" component={ViewBook} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

