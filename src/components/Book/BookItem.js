import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { URL_IMG } from "../../utils/constants";

export default function BookItem({   
    width = 120,
    height = 150,
    id,
    favorite,
    ...rest
}) {
    const navigation = useNavigation();

    const goToPreviewBook = () => {        
        navigation.navigate("detail-book", { id, favorite, ...rest });
    };

    return (
        <TouchableOpacity onPress={goToPreviewBook}>
            <Card mode="outlined" style={{ ...styles.container, width: width }}>
                <Card.Cover
                    style={{ ...styles.image, height: height }}
                    source={{ uri: `${URL_IMG}/${rest.imgUrl}` }}
                />
                <Paragraph style={styles.title} numberOfLines={1}>
                    {rest.title}                    
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
