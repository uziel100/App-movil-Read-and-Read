import { StyleSheet } from "react-native";
import colors from "./colors";

const formStyle = StyleSheet.create({
    textInput:{
        fontSize: 13,
        color: '#555'
    },
    input: {
        marginBottom: 20,
        backgroundColor: colors.bgLight,        
    },
    btnPrimary: {
        padding: 5,
        backgroundColor: colors.primary,
    },
    btnAccent: {
        padding: 5,
        backgroundColor: colors.accent,
    },
    btn: {
        padding: 5,
        backgroundColor: colors.fontLight,
        marginBottom: 20
    },
    btnSuccess: {
        padding: 5,
        backgroundColor: colors.secondary,
        marginBottom: 20
    },
    btnLight: {
        padding: 5,
        backgroundColor: colors.primary,
        marginBottom: 20
    },
    btnText: {
        marginTop: 10,
    },
    btnTextLabel: {
        color: colors.dark,
    },
});

export default formStyle;
