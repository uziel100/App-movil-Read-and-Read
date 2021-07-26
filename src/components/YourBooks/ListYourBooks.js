import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,    
    ScrollView,
    Dimensions,
} from "react-native";

import { getAllBooksByUserApi } from "../../api/books";
import { map, size } from "lodash";
import useAuth from "../../hooks/useAuth";
import BookItem from "../Book/BookItem";
import ScreenLoading from "../ScreenLoading";

const width = Dimensions.get('window').width / 2 - 30;
const height = Dimensions.get('window').width / 2;

export default function  ListYourBooks() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState( false )
    const { auth } = useAuth();

    useEffect(() => {
        (async () => {              
            setLoading(true);
            const response = await getAllBooksByUserApi(auth);
            setProducts(response?.books);
            setLoading(false);
        })();
    }, []);
    
    if(loading) 
        return <ScreenLoading />                 

    return (
        <View style={{  alignContent: 'center', alignItems: 'center' }} >            
            {!products || size(products) === 0 ? (
                <Text>No tienes libros agregados</Text>
            ) : (
                <ScrollView style={{ zIndex: 0  }}>
                    <View style={styles.container}>
                        {map(products, (product) => (
                            <BookItem
                                key={product.book._id}
                                imgUrl={product.book.imgUrl}
                                title={product.book.title}
                                fileName={product.book.fileName}
                                width={ width }
                                height={ height }
                            />
                        ))}
                    </View>
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 150,
    },
});
