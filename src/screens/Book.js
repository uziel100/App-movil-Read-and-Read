import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Book() {
       
    return (
        <View style={styles.container}>
            <Text>Here, babel will put his module</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30   
    },
});
