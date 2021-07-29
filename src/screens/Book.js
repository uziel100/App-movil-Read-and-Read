import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import YouBooks from "../components/YourBooks/YourBooks";
import StatusBarCustom from "../components/StatusBarCustom";
import colors from "../styles/colors";

export default function Book() {
    const paperTheme = useTheme();

    return (
        <>
            <StatusBarCustom backgroundColor={colors.accent} />
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: paperTheme.colors.surface,
                    }
                ]}
            >
                <YouBooks />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
});
