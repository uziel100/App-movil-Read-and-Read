import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Subheading } from 'react-native-paper'
import BookItem from '../Book/BookItem'

export default function RecentlyViewedBooks() {
    return (
        <View style={ styles.container } >
            <Subheading style={ styles.titleSection }>Agregados recientemente</Subheading> 
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
        paddingBottom: 30
    },
    containerFlex: {        
        flexDirection: 'row',        
        flexWrap: 'wrap',
        justifyContent: 'space-between',        
    },
    titleSection:{
        marginVertical: 10,
        fontSize: 14,
        color: '#555'
    }
})

