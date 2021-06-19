import React from "react";
import {
    View,    
    KeyboardAvoidingView,
    Image,
    StyleSheet,    
} from "react-native";
import FormLogin from "../components/Auth/FormLogin";

import { layoutStyle } from "../styles";
import person from "../../assets/logo-bg.png";

export default function Auth() {
    return (
        <View style={layoutStyle.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={layoutStyle.container}
            >
                <Image style={styles.logo} source={person} />
                <FormLogin />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 170,
        height: 190,
        resizeMode: "cover",
        alignSelf: "center",
        marginBottom: 40,
    },
});
