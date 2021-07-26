import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import { getUsernameApi, updateUsernameApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import colors from "../../styles/colors";
import { formStyle } from "../../styles";

export default function ChangeUsername() {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

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
        <View style={styles.content}>
            <TextInput
                label="Nombre de usuario"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("username", text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <Button
                mode="contained"
                style={formStyle.btnAccent}
                onPress={formik.handleSubmit}
                disabled={ loading }
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
    content: {
        padding: 20,
    },
});
