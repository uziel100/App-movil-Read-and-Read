import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { useTheme, Text } from "react-native-paper";
import NewBooks from "../components/Home/NewBooks";
import RecentlyViewedBooks from "../components/Home/RecentlyViewedBooks";
import StatusBarCustom from "../components/StatusBarCustom";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../components/Search";
import colors from "../styles/colors";
import { getUsernameApi } from "../api/username";
import { useFocusEffect } from "@react-navigation/native";

export default function Home() {
    const [username, setUsername] = useState("");

    const paperTheme = useTheme();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const username = await getUsernameApi();
                setUsername(username);
            })();
        }, [])
    );

    return (
        <>
            <StatusBarCustom backgroundColor={colors.accent} />
            <LinearGradient
                style={styles.containerBackground}
                colors={[colors.accent, colors.primary]}
            >
                <Search />
                <View style={styles.containerTitleWelcome}>
                    <Text style={styles.titleWelcome}>Bienvenid@</Text>
                    <Text style={styles.titleNameUser}>{username}</Text>
                </View>
            </LinearGradient>
            <ScrollView
                style={[
                    styles.container,
                    { backgroundColor: paperTheme.colors.surface },
                ]}
            >
                <RecentlyViewedBooks />
                <NewBooks />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 0,
    },
    containerBackground: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    containerTitleWelcome: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginVertical: 30,
    },
    titleWelcome: {
        fontWeight: "bold",
        fontSize: 21,
        color: "#fff",
    },
    titleNameUser: {
        fontSize: 20,
        marginLeft: 5,
        color: "#fff",
    },
});
