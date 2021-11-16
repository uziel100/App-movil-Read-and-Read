import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function Welcome({ setIsWelcome }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome screen</Text>
            <Button mode="contained" onPress={() => setIsWelcome(false)}>
                Ir a auth
            </Button>
        </View>
    )
}
