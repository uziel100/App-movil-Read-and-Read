import React, { useEffect, useState } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { URL_FILES } from "../../utils/constants";
import { FAB } from "react-native-paper";
import * as ScreenOrientation from "expo-screen-orientation";
import colors from "../../styles/colors";

export default function ViewBook({ route: { params } }) {

    const navigation = useNavigation();
    const { fileName, title } = params;
    const [isHorizontal, setIsHorizontal] = useState(false);
    const [icon, setIcon] = useState('phone-rotate-landscape');

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", onBackPress);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", onBackPress);
        };
    }, []);

    const onBackPress = async () => {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.DEFAULT
        );
        navigation.goBack();
    };

    async function changeScreenOrientation() {
        setIsHorizontal(!isHorizontal);

        const ORIENTATION = isHorizontal ? "DEFAULT" : "LANDSCAPE_LEFT";
        setIcon( isHorizontal ? "phone-rotate-landscape" : "phone-rotate-portrait" )

        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock[ORIENTATION]
        );
    }


    useEffect(() => {
        navigation.setOptions({ title });
    }, []);

    return (
        <View style={styles.container}>
            <WebView
                source={{
                    uri: `https://docs.google.com/viewer?url=${URL_FILES}/${fileName}&embedded=true&chrome=false`,
                }}
            />
            <FAB
                color={colors.bgLight}
                style={styles.fab}
                icon={ icon }
                onPress={changeScreenOrientation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: colors.primary,
    },
});
