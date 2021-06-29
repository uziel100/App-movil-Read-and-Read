import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Subheading } from 'react-native-paper'
import BookItem from '../Book/BookItem'

export default function NewBooks() {
    return (
        <View style={ styles.container } >
            <Subheading style={ styles.titleSection }>Nuevos</Subheading> 
            <View style={ styles.containerFlex } >
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />                                        
            </View>
        </View>
    )
}

const styles = StyleSheet.create({    
    container:{
        marginVertical: 10
    },
    containerFlex: {        
        flexDirection: 'row',        
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        overflow: 'scroll'       
    },
    titleSection:{
        marginVertical: 10,
        fontSize: 14
    }
})

