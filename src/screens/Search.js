import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { searchBooksByUserApi } from "../api/search";
import { size, map } from "lodash";
import useAuth from "../hooks/useAuth";
import BookItem from "../components/Book/BookItem";

const width = Dimensions.get("window").width / 2 - 30;
const height = Dimensions.get("window").width / 2 + 20;

export default function Search({ route: { params } }) {
    const { query } = params;
    const { auth } = useAuth();
    const [books, setBooks] = useState(null);

    useEffect(() => {
        (async () => {
            setBooks(null);
            const response = await searchBooksByUserApi(auth, query);
            setBooks(response.books);
        })();
    }, [query]);

    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Text style={styles.title}>Buscaste: </Text>
                <Text style={styles.query}>{query}</Text>
            </View>
            <View style={{}}>
                {!books || size(books) === 0 ? (
                    <Text style={styles.empty}>
                        No hay ninguna coincidencia
                    </Text>
                ) : (
                    <ScrollView style={{ marginTop: 30 }}>
                        <View style={styles.flexContainer}>
                            {map(books, (product) => (
                                <BookItem
                                    key={product._id}
                                    imgUrl={product.book.imgUrl}
                                    title={product.book.title}
                                    fileName={product.book.fileName}
                                    width={width}
                                    height={height}
                                />
                            ))}                           
                        </View>
                    </ScrollView>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    query: {
        fontSize: 18,
        fontWeight: "normal",
    },
    empty: {
        marginTop: 30,
        fontSize: 22,
        color: "#555",
        textAlign: "center",
    },
    flexContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
