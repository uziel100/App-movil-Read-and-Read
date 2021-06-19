import React, { useEffect, useState } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import BookWishList from './BookWishList'
import { getWishListApi } from '../../api/books'
import EmptyWishList from '../../../assets/wishlist-empty.png'
import SkeletonWishList from '../Skeleton/SkeletonWishList'

const height = Dimensions.get('window').height / 6;

export default function ListWishList() {

    const [wishList, setWishList] = useState([])

    console.log(height)
    useEffect( () => {
        const list = getWishListApi();
        setWishList( list )
    }, [])

    if( !wishList.length ) return (
        <View style={ { marginTop: height, alignItems: 'center' } } >
            <Image style={{ width: '100%', height: 180, resizeMode: 'contain' }}  source={ EmptyWishList } />
            <Text style={{  marginVertical: 15, fontSize: 16, color: '#555' }} >No has agregado libro aún</Text>
        </View>
    )

    return (
        <View>
            {/* <SkeletonWishList /> */}
            {
                wishList.map( item => (
                    <BookWishList 
                        key={ item.id }
                        title={ item.title } 
                        price={ item.price } 
                    />            
                ))
            }            
        </View>
    )
}
