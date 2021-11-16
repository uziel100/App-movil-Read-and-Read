import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, RefreshControl } from "react-native";
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
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [pullToRefreshEnabled, setPullToRefreshEnabled] = useState(false);


    const getData = () => { 
        (async () => {
            const response = await getFavoritesBooksByUserApi(auth);
            setProducts(response?.books);
            setLoading(false);
            setPullToRefreshEnabled(true);
            if (refreshing) {
                setRefreshing(false);
            }
        })();
    }
    useEffect(() => {
        setPullToRefreshEnabled(false);
        setLoading(true);
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [refreshing]);

    const onRefresh = React.useCallback(() => {
        if (!loading) {
            setRefreshing(true);
        }
    });


    if(loading) return <ScreenLoading />  

    return (
        <View style={styles.containerRoot}>
            {!products || size(products) === 0 ? (
                <Text>No hay libros en favoritos</Text>
            ) : (
                 <ScrollView style={{ zIndex: 0 }}
                    showsVerticalScrollIndicator={false}
                    refreshControl={ 
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            enabled={pullToRefreshEnabled}
                            colors={['#2F80ED', '#2F80ED', '#2F80ED']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                 >
                   <View style={styles.container}>
                        {map(products, (product) => (
                            <BookItem
                                key={product._id}                                
                                favorite={ product.favorite }
                                id={ product._id }
                                width={width}
                                height={height}
                                { ...product.book }
                            />
                        ))}
                    </View>     
                </ScrollView>
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
        marginBottom: 150,
    },
});
