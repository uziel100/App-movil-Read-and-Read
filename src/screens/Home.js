import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import NewBooks from "../components/Home/NewBooks";
import RecentlyViewedBooks from "../components/Home/RecentlyViewedBooks";
import StatusBarCustom from "../components/StatusBarCustom";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const onChangeSearch = (query) => setSearchQuery(query);
    return (
        <>
            <StatusBarCustom backgroundColor="#84b6f4" />
            <View style={styles.containerBackground}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    placeholder="Ecuentra tus ebooks"
                />
                <View style={styles.containerTitleWelcome}>
                    <Text style={styles.titleWelcome}>Bienvenid@</Text>
                    <Text style={styles.titleNameUser}>Uziel Meliton</Text>
                </View>
            </View>
            <ScrollView style={styles.container}>
                <NewBooks />
                <RecentlyViewedBooks />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    containerBackground: {
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#84b6f4",
        marginBottom: 5,
    },
    containerTitleWelcome: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginVertical: 30,
    },
    titleWelcome: {
        fontWeight: "bold",
        fontSize: 21,
    },
    titleNameUser: {
        fontSize: 20,
        marginLeft: 5,
    },
});
