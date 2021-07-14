import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";

export default function ChangeName() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            console.log("formulario enviado");
            console.log(formValue);
        }
    });

    return (
        <View style={styles.container}>
            <TextInput 
            label="Nombre" 
            style={formStyle.input}
            onChangeText={(text) => formik.setFieldValue("name", text)}
            value={formik.values.name}
            error={formik.errors.name}  
            />
            <TextInput 
            label="Apellidos" 
            style={formStyle.input} 
            onChangeText={(text) => formik.setFieldValue("lastname", text)}
            value={formik.values.lastname}
            error={formik.errors.lastname}
            />
            <Button
            mode="contained"
            style={formStyle.btnSuccess}
            onPress={formik.handleSubmit}
            >
                Cambiar nombre y apellidos
            </Button>
        </View>
    )
}

function initialValues() {
    return {
        name: "",
        lastname: "",
    };
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastname: Yup.string().required(true),
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});