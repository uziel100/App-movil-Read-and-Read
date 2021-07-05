import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { URL_IMG } from "../../utils/constants";

export default function BookItem({ fileName, title, imgUrl }) {
    const navigation = useNavigation();

    const goToPreviewBook = () => {
        navigation.navigate("view-book", { title, fileName });
    };

    return (
        <TouchableOpacity onPress={goToPreviewBook}>
            <Card mode="outlined" style={styles.container}>
                <Card.Cover
                    style={styles.image}
                    source={{ uri: `${URL_IMG}/${imgUrl}` }}
                />
                <Paragraph style={styles.title} numberOfLines={1}>
                    {title}
                </Paragraph>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        marginBottom: 5,
        marginRight: 10,
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        fontSize: 11,
        paddingHorizontal: 5,
    },
});
