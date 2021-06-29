import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { WebView } from 'react-native-webview';

export default function Book() {
       
    return (
        <View style={styles.container}>
            <WebView                
                source={{ uri: "https://docs.google.com/viewer?url=https://read-and-read-bck.s3.us-west-1.amazonaws.com/fileBook/example-book-js.pdf" }} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30   
    },
});
