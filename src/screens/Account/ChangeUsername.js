import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user"; 
import { formStyle } from "../../styles";

export default function ChangeUsername() {
    //const { auth } = useAuth();
    

    /*useFocusEffect(    
    useCallback(() => {
            (async () => {
                const response = await getMeApi(auth.token);
                await formik.setFieldValue("username", response.username);
            })();
        }, [])
    );*/

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log("Formulario enviado...")
            console.log(formData);
        }
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
            style={formStyle.btnSuccess} 
            onPress={formik.handleSubmit}
            >
                Cambiar nombre de usuario
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
    }
})