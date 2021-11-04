import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    HeaderBackButton,
} from "@react-navigation/stack";
import ViewBook from "../screens/Book/ViewBook";
import TabsNavigation from "./TabsNavigation";
import * as ScreenOrientation from "expo-screen-orientation";
import colors from "../styles/colors";
import AboutApp from "../screens/Account/AboutApp";
import Contact from "../screens/Account/Contact";
const Stack = createStackNavigator();

export default function AppNavigation() {
    async function changeScreenOrientation(navigation) {
        navigation.goBack();
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.DEFAULT
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="tabs-app"
                screenOptions={{
                    headerTintColor: colors.fontLight,
                    headerStyle: { backgroundColor: colors.accent }                   
                }}
            >
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="tabs-app"
                    component={TabsNavigation}
                />
                <Stack.Screen
                    name="view-book"
                    component={ViewBook}
                    options={({ navigation }) => ({
                        headerLeft: (props) => (
                            <HeaderBackButton
                                {...props}
                                onPress={async () => {
                                    await changeScreenOrientation(navigation);
                                }}
                            />
                        ),
                    })}                  
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="about-app"
                    component={AboutApp}
                />
                <Stack.Screen
                 options={{ headerShown: false }}
                 name="contact"
                 component={Contact}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
