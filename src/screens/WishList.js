import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getWishListApi } from "../api/wishlist";
import ListWishList from "../components/Book/ListWishList";
import useAuth from "../hooks/useAuth";

export default function WishList() {
    const { auth } = useAuth();

    const [wishList, setWishList] = useState(null);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                setWishList(null);
                const { data } = await getWishListApi(auth);
                setWishList(data);
            })();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Libros deseados</Text>
            <ScrollView>
                <ListWishList wishlist={wishList} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
        marginVertical: 20,
    },
});
