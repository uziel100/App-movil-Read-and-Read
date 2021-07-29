import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../styles/colors";
import { IconButton, useTheme, Text } from "react-native-paper";
import { map } from "lodash";

import * as Linking from "expo-linking";
import { SITE_WEB } from "../../utils/constants";
import useAuth from "../../hooks/useAuth";

const links = [
    {
        id: 1,
        title: "Visita nuestra página web",
        url: "",
    },
    {
        id: 2,
        title: "Acerca de nosotros",
        url: "/nosotros",
    },
    {
        id: 3,
        title: "Política de privacidad",
        url: "/ayuda/politica-de-privacidad",
    },
];

export default function AboutApp() {
    const goToBrowser = (path) => {
        Linking.openURL(`${SITE_WEB}${path}`);
    };

    const { theme } = useAuth();
    const paperTheme = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: paperTheme.colors.surface }}>
            <LinearGradient
                style={styles.containerBackground}
                colors={[colors.accent, "#7559cb"]}
            >
                <View>
                    <View style={styles.line}></View>
                    <Text style={styles.title}>Read&Read</Text>
                </View>
                <Text style={styles.text}>
                    Read&Read ofrece una plataforma para todas aquellas personas
                    interesadas por la cultura, y busca de información o
                    entretenimiento. ¡Únete a la comunidad, y juntos fomentemos
                    la lectura!
                </Text>
            </LinearGradient>
            <View style={{...styles.containerBottom, backgroundColor: theme === 'dark'? '#18191a': '#fff' }}>
                {map(links, (link) => (
                    <TouchableOpacity
                        key={link.id}
                        onPress={() => goToBrowser(link.url)}
                    >
                        <View style={styles.boxLink}>
                            <Text>{link.title}</Text>
                            <IconButton
                                icon="arrow-right"
                                color={ theme === 'dark'? '#eee': '#000' }
                                size={18}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBackground: {
        padding: 30,
        flex: 5,
        justifyContent: "space-around",
    },
    title: {
        fontSize: 38,
        fontWeight: "bold",
        color: colors.bgLight,
    },
    text: {
        color: "#fff",
        fontSize: 16,
    },
    containerBottom: {        
        flex: 3,
        paddingHorizontal: 30,
        justifyContent: "flex-end",
    },
    line: {
        width: 100,
        height: 5,
        backgroundColor: "#fff",
    },
    boxLink: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between",
        paddingVertical: 6,
        marginVertical: 2,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
});
