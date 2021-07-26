import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native'

export default function ScreenLoading( { color, title, size }  ) {
    return (
        <SafeAreaView style={ styles.container } >
            <ActivityIndicator size={ size } color={ color } style={ styles.loading } />
            <Text style={ styles.title }>{ title }</Text> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    loading: {
        marginBottom: 10,
    },
    title: {
        fontSize: 16
    }
})

ScreenLoading.defaultProps = {
    title: '',
    size: 'large',
    color: '#000'
}
