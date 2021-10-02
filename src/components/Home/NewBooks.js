import React, { useCallback, useState } from "react";
import {
    View,    
    StyleSheet,
    ScrollView,
} from "react-native";
import { Subheading, Text } from "react-native-paper";
import { getBooksByUserApi } from "../../api/books";
import BookItem from "../Book/BookItem";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";


export default function NewBooks() {
    const { auth } = useAuth();
    const [books, setBooks] = useState(null);

    useFocusEffect(
        useCallback(() => {
            setBooks( null );
            (async () => {
                const data = await getBooksByUserApi(auth);  
                setBooks( data.books );                
            })();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Subheading style={styles.titleSection}>
                Agregados recientemente
            </Subheading>
            <View style={styles.containerFlex}>
                {!books ? (
                    <Text>Cargando...</Text>
                ) : books.length === 0 ? (
                    <Text>No tienes ningún libro</Text>
                ) : (
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {books.map((item) => (
                            <BookItem
                                key={item.book._id}
                                imgUrl={item.book.imgUrl}
                                title={item.book.title}
                                fileName={ item.book.fileName }
                                summary={ item.book.summary }
                                lang={ item.book.lang }
                                numPages={ item.book.numPages }
                                score={ item.book.score }
                                imgUrl={ item.book.imgUrl }
                                favorite={ item.favorite }
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
