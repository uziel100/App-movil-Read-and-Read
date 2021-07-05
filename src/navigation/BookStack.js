import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ViewBook from '../screens/Book/ViewBook';

const Stack = createStackNavigator();

export default function BookStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='view-book'
                component={ ViewBook }
                options={{
                    title: 'Cuenta',
                    headerShown: false
                }}
            /> 
        </Stack.Navigator>
    )
}
