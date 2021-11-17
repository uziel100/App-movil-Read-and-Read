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
import DetailBook from "../screens/Book/DetailBook";
import AllDetailBook from "../screens/Book/AllDetailBook"
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
                    name="contact"
                    component={Contact}
                    options={{
                        title: "Contacto empresa",
                    }}
                />
                <Stack.Screen
                    name="detail-book"
                    component={DetailBook}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#052149',
                            elevation: 0
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="all-detail-book"
                    component={AllDetailBook}
                    options={{
                        title: '',
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
