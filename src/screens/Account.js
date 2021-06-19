import React from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-paper";
import useAuth from '../hooks/useAuth';

export default function Account() {
    const { logout } = useAuth();
    return (
        <View>
            <Text>Acoount screen</Text>
            <Button 
                mode="contained"
                onPress={ logout }
            >Logout</Button>
        </View>
    )
}
