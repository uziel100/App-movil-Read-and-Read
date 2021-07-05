import React, { useCallback, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    ScrollView,
} from "react-native";
import { Subheading } from "react-native-paper";
import { getBooksByUserApi } from "../../api/books";
import BookItem from "../Book/BookItem";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { sortArrayByDateAsc } from "../../utils/funtions";
import Carousel from "react-native-snap-carousel";

const width = Dimensions.get("window").width;

export default function NewBooks() {
    const { auth } = useAuth();
    const [books, setBooks] = useState(null);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const data = await getBooksByUserApi(auth);
                const sortBooks = sortArrayByDateAsc(data.books);
                setBooks(sortBooks);
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
                    <Text>cargando...</Text>
                ) : !books?.length ? (
                    <Text>NO tienes libros</Text>
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
