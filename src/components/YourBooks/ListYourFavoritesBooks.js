import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { getFavoritesBooksByUserApi } from "../../api/books";
import { map, size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";
import BookItem from "../Book/BookItem";
import ScreenLoading from "../ScreenLoading";

const width = Dimensions.get("window").width / 2 - 30;
const height = Dimensions.get("window").width / 2;

export default function ListYourFavoritesBooks() {
    const { auth } = useAuth();
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState( false )

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await getFavoritesBooksByUserApi(auth);
            setProducts(response?.books);
            setLoading(false);
        })();
    }, []);

    if(loading) 
        return <ScreenLoading />  

    return (
        <View style={styles.containerRoot}>
            {!products || size(products) === 0 ? (
                <Text>No hay libros en favoritos</Text>
            ) : (
                <View style={styles.container}>
                    {map(products, (product) => (
                        <BookItem
                            key={product._id}
                            imgUrl={product.book.imgUrl}
                            title={product.book.title}
                            fileName={product.book.fileName}
                            summary={ product.book.summary }
                            lang={ product.book.lang }
                            numPages={ product.book.numPages }
                            score={ product.book.score }
                            imgUrl={ product.book.imgUrl }
                            favorite={ product.favorite }
                            id={ product._id }
                            width={width}
                            height={height}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerRoot: {
        alignContent: "center",
        alignItems: "center",
        marginBottom: 150,
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
