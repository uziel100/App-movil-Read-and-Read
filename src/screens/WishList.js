import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ListWishList from '../components/Book/ListWishList'

export default function WishList() {
    return (        
        <View style={ styles.container }>
            <Text style={ styles.title }>Libros deseados</Text>
            <ScrollView>
                <ListWishList />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{        
        padding: 20,
        paddingTop: 40,
        marginBottom: 40,                
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 10
    }
})


