import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-paper';
import bookImg from '../../../assets/bookCover.jpg';
import colors from '../../styles/colors';

export default function BookWishList({ title, price }) {
    return (
        <Card  mode="outlined" style={{ width: '100%', height: 130, marginVertical: 5 }}  >
            <View style={ styles.bookContainer } >  
                <Card.Cover 
                    style={ styles.book_img }
                    source={ bookImg }  
                />                          
                
                <Card.Content style={ styles.book_content } >
                    <Text style={ styles.book_content__title } 
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >{ title }</Text>
                    <Text style={ styles.book_content__price }>$ { price } MX</Text>
                    <Button 
                        color={ colors.primary }
                        contentStyle={{ height: 28 }}
                        style={ styles.book_content__btn  }
                        labelStyle={ { fontSize: 14 } }
                        uppercase={ false }
                        mode="contained"   
                        compact                  
                        onPress={ () =>  console.log(`Ver libro: ${ title }`) }
                    >Ir al sitio</Button>
                </Card.Content>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    bookContainer:{                
        width: '100%', 
        height: '100%',
        flexDirection: 'row',          
    },
    book_img:{
        width: '30%',
        height: '100%', 
    },
    book_content:{
        width: '70%', 
        height: '100%',
        justifyContent: 'center'      
    },
    book_content__title:{
        fontSize: 16,        
    },
    book_content__price:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'        
    },
    book_content__btn:{
        width: 100, marginTop: 10 
    }

})

