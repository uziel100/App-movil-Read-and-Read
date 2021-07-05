import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import NewBooks from "../components/Home/NewBooks";
import RecentlyViewedBooks from "../components/Home/RecentlyViewedBooks";
import SearchBarCustom from "../components/SearchBarCustom";
import StatusBarCustom from "../components/StatusBarCustom";

export default function Home() {

    return (
        <>
            <StatusBarCustom backgroundColor="#397f77" />
            <View style={styles.containerBackground}>
                <SearchBarCustom />
                <View style={styles.containerTitleWelcome}>
                    <Text style={styles.titleWelcome}>Bienvenid@</Text>
                    <Text style={styles.titleNameUser}>Uziel Meliton</Text>
                </View>
            </View>
            <ScrollView style={styles.container}>
                <NewBooks />
                {/* <RecentlyViewedBooks /> */}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 0        
    },
    containerBackground: {
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#397f77"        
    },
    containerTitleWelcome: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginVertical: 30,
    },
    titleWelcome: {
        fontWeight: "bold",
        fontSize: 21,
        color: '#fff'
    },
    titleNameUser: {
        fontSize: 20,
        marginLeft: 5,
        color: '#fff'
    },
});
