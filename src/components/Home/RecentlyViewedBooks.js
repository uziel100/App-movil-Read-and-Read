import React, { useCallback, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Subheading, Text } from "react-native-paper";
import { getRecentlyReadBooksByUserApi } from "../../api/books";
import BookItem from "../Book/BookItem";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";

export default function NewBooks() {
    const { auth } = useAuth();
    const [books, setBooks] = useState(null);

    useFocusEffect(
        useCallback(() => {
            setBooks(null);
            (async () => {
                const { books } = await getRecentlyReadBooksByUserApi(auth);
                setBooks(books);
            })();
        }, [])
    );

    return (
        <View style={styles.container}>
            {!books?.length || (
                <Subheading style={styles.titleSection}>
                    Leidos recientemente
                </Subheading>
            )}

            <View style={styles.containerFlex}>
                {!books ? (
                    <Text>Cargando...</Text>
                ) : books.length === 0 ? (
                    <></>
                ) : (
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {books.map((item) => (
                            <BookItem
                                key={item._id}
                                imgUrl={item.book.imgUrl}
                                title={item.book.title}
                                fileName={item.book.fileName}
                                summary={ item.book.summary }
                                lang={ item.book.lang }
                                numPages={ item.book.numPages }
                                score={ item.book.score }
                                imgUrl={ item.book.imgUrl }
                                favorite={ item.favorite }
                                id={ item._id }
                            />
                        ))}
                    </ScrollView>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    containerFlex: {
        flexDirection: "row",
    },

    titleSection: {
        color: "#555",
        marginVertical: 10,
        fontSize: 14,
    },
});
