import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { URL_FILES } from "../../utils/constants";

export default function ViewBook({ route: { params } }) {
    const navigation =  useNavigation();

    const { fileName, title } = params;

    useEffect(()=> {
        navigation.setOptions({ title });
    }, [])

    
    return (
        <View style={styles.container}>
            <WebView
                source={{
                    uri: `https://docs.google.com/viewer?url=${ URL_FILES }/${ fileName }&embedded=true&chrome=false`,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1        
    },
});
