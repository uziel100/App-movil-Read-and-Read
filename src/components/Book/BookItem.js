import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { URL_IMG } from "../../utils/constants";

export default function BookItem({
    fileName,
    title,
    summary,
    lang,
    numPages,
    score,
    imgUrl,
    width = 120,
    height = 150,
}) {
    const navigation = useNavigation();
    
    const goToPreviewBook = () => {        
        navigation.navigate("detail-book", {
            title,
            fileName,
            summary,
            lang,
            numPages,
            score,
            imgUrl
        });
    };

    return (
        <TouchableOpacity onPress={goToPreviewBook}>
            <Card mode="outlined" style={{ ...styles.container, width: width }}>
                <Card.Cover
                    style={{ ...styles.image, height: height }}
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
        marginBottom: 5,
        marginRight: 10,
    },
    image: {
        width: "100%",
    },
    title: {
        fontSize: 11,
        paddingHorizontal: 5,
    },
});
