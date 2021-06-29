import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-paper';
import colors from '../../styles/colors';
import { URL_IMG, URL_SITE } from '../../utils/constants'
import * as Linking from 'expo-linking';

export default function BookWishList({idBook, title, price, imgUrl }) {

    const goToBrowser = () =>{
        Linking.openURL( `${ URL_SITE }/libro/${ idBook }`  );
    }

    return (
        <Card  mode="outlined" style={{ width: '100%', height: 130, marginVertical: 5 }}  >
            <View style={ styles.bookContainer } >  
                <Card.Cover 
                    style={ styles.book_img }
                    source={{ uri: `${ URL_IMG }/${ imgUrl }` }}  
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
                        onPress={ goToBrowser }
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

