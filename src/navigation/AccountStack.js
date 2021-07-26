import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import ChangeName from "../screens/Account/ChangeName";
import ChangeUsername from "../screens/Account/ChangeUsername";
import AcercaDeApp from "../screens/Account/AcercaDeApp";
import colors from "../styles/colors";

const Stack = createStackNavigator();

export default function AccountStack() {
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.fontLight,
                headerStyle: { backgroundColor: colors.accent },
                cardStyle: {
                    backgroundColor: colors.bgLight,
                }
            }}
        >
            <Stack.Screen
                name="account"
                component={Account}
                options={{ title: "Cuenta", headerShown: false }}
            />
            <Stack.Screen
                name="change-name"
                component={ChangeName}
                options={{
                    title: "Información personal",
                }}
            />
            <Stack.Screen
                name="change-username"
                component={ChangeUsername}
                options={{
                    title: "Cambiar username",
                }}
            />
            <Stack.Screen
                name="Acerca-De-App"
                component={AcercaDeApp}
                options={{
                    title: "Acerca de la aplicacion",
                }}
            />
        </Stack.Navigator>
    );
}
