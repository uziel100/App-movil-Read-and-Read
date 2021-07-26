import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import StatusBar from "../../components/StatusBarCustom";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import colors from "../../styles/colors";
import { formStyle } from "../../styles";
export default function ChangeName() {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getMeApi(auth);                
                await formik.setFieldValue("name", response.user.name);
                await formik.setFieldValue("lastName", response.user.lastName);
                await formik.setFieldValue("address", response.user.address);
                await formik.setFieldValue("phone", response.user.phone);
                await formik.setFieldValue(
                    "birthDate",
                    response.user.birthDate
                );
                await formik.setFieldValue("gender", response.user.gender);
            })();
        }, [])
    );

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);            
            try {
                const data = await updateUserApi(auth, formData);
                console.log(data)
                navigation.goBack();
            } catch (error) {
                Toast.show({
                    text1: "Ha ocurrido un error",
                    autoHide: true,
                    type: "error",
                    topOffset: 80,
                    position: "top",
                });
                setLoading(false);
            }
        },
    });

    return (
        <>
            <StatusBar
                backgroundColor={colors.bgDark}
                barStyle="light-content"
            />
            <KeyboardAwareScrollView style={styles.container} extraHeight={25}>
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
                    onChangeText={(text) =>
                        formik.setFieldValue("lastName", text)
                    }
                    value={formik.values.lastName}
                    error={formik.errors.lastName}
                />
                <TextInput
                    label="Dirección"
                    style={formStyle.input}
                    onChangeText={(text) =>
                        formik.setFieldValue("address", text)
                    }
                    value={formik.values.address}
                    error={formik.errors.address}
                />
                <TextInput
                    label="Teléfono"
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue("phone", text)}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                />
                <TextInput
                    label="Fecha de nacimiento"
                    style={formStyle.input}
                    onChangeText={(text) =>
                        formik.setFieldValue("birthDate", text)
                    }
                    value={formik.values.birthDate}
                    error={formik.errors.birthDate}
                />
                <TextInput
                    label="Género"
                    style={formStyle.input}
                    onChangeText={(text) =>
                        formik.setFieldValue("gender", text)
                    }
                    value={formik.values.gender}
                    error={formik.errors.gender}
                />
                <Button
                    mode="contained"
                    style={[formStyle.btnAccent, styles.btn]}
                    onPress={formik.handleSubmit}
                    disabled={loading}
                    loading={loading}
                >
                    Guardar cambios
                </Button>
            </KeyboardAwareScrollView>
        </>
    );
}

function initialValues() {
    return {
        name: "",
        lastName: "",
        address: "",
        phone: "",
        birthDate: "",
        gender: "",
    };
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastName: Yup.string().required(true),
        address: Yup.string().required(true),
        phone: Yup.string().required(true),
        birthDate: Yup.string().required(true),
        gender: Yup.string().required(true),
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    btn: {
        marginBottom: 80,
    },
});
