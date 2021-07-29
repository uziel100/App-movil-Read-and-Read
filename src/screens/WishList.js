import React, { useState, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { getWishListApi } from "../api/wishlist";
import ListWishList from "../components/Book/ListWishList";
import useAuth from "../hooks/useAuth";

export default function WishList() {
    const { auth } = useAuth();
    const [wishList, setWishList] = useState(null);
    
    const paperTheme = useTheme();

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
        <View style={[styles.container, { backgroundColor: paperTheme.colors.surface }]}>
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
        paddingBottom: 40,
        flex: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
        marginVertical: 20,
    },
});
