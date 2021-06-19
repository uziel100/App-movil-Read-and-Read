import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Fab } from './Fab'

export const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={ { fontSize: 26 } }>{ counter }</Text>
            <Fab title="+1" onPress={ () => setCounter( counter + 1 ) } />
            <Fab title="-1" onPress={ () => setCounter( counter - 1 ) } />
        </View>
    )
}
