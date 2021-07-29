import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import { getUsernameApi, updateUsernameApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import { formStyle } from "../../styles";
import { setUsernameApi } from "../../api/username";

export default function ChangeUsername() {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const paperTheme = useTheme();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getUsernameApi(auth);
                await formik.setFieldValue("username", response.username);
            })();
        }, [])
    );

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                const response = await updateUsernameApi(auth, formData);
                if (!response.status) throw "El nombre de usuario ya existe";
                await setUsernameApi(formData.username);
                navigation.goBack();
            } catch (error) {
                Toast.show({
                    text1: error,
                    autoHide: true,
                    type: "error",
                    topOffset: 50,
                    position: "bottom",
                });
                formik.setFieldError("username", true);
                setLoading(false);
            }
        },
    });

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: paperTheme.colors.surface },
            ]}
        >
            <TextInput
                label="Nombre de usuario"
                style={[
                    formStyle.input,
                    { backgroundColor: paperTheme.colors.input },
                ]}
                onChangeText={(text) => formik.setFieldValue("username", text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <Button
                mode="contained"
                style={formStyle.btnAccent}
                onPress={formik.handleSubmit}
                disabled={loading}
            >
                Guardar cambios
            </Button>
        </View>
    );
}

function initialValues() {
    return {
        username: "",
    };
}

function validationSchema() {
    return {
        username: Yup.string().min(4, true).required(true),
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
