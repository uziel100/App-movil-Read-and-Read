import React, { useEffect, useState, useCallback } from "react";
import {
    StyleSheet,
    View,
    Platform,
    TouchableWithoutFeedback,
} from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import StatusBar from "../../components/StatusBarCustom";
import Gender from "../../components/Account/Gender";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import colors from "../../styles/colors";
import { formStyle } from "../../styles";

export default function ChangeName() {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const paperTheme = useTheme();

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [gender, setGender] = useState(null);

    const onChange = async (event, selectedDate) => {
        const currentDate = selectedDate || date;
        const formatDate = currentDate.toISOString().split("T")[0];
        setShow(Platform.OS === "ios");
        selectedDate && setDate(currentDate);
        selectedDate &&
            (await formik.setFieldValue(
                "birthDate",
                customDateInit(formatDate, -1)
            ));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode("date");
    };

    const customDateInit = (date, flag = 1) => {
        const splitDate = date.split("-");
        const dayNext = String(Number(splitDate[2]) + flag);
        splitDate[2] = dayNext;

        return splitDate.join("-");
    };

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
                const currentDate = response?.user?.birthDate
                    ? new Date(customDateInit(response.user.birthDate))
                    : date;
                setDate(currentDate);
                setGender(response?.user?.gender || gender);
            })();
        }, [])
    );

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                const data = await updateUserApi(auth, { ...formData, gender });
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
            <KeyboardAwareScrollView
                style={[
                    styles.container,
                    { backgroundColor: paperTheme.colors.surface },
                ]}
                extraHeight={25}
            >
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        display="default"
                        onChange={onChange}
                        maximumDate={new Date()}
                    />
                )}
                <TextInput
                    label="Nombre"
                    style={[
                        formStyle.input,
                        { backgroundColor: paperTheme.colors.input },
                    ]}
                    onChangeText={(text) => formik.setFieldValue("name", text)}
                    value={formik.values.name}
                    error={formik.errors.name}
                />
                <TextInput
                    label="Apellidos"
                    style={[
                        formStyle.input,
                        { backgroundColor: paperTheme.colors.input },
                    ]}
                    onChangeText={(text) =>
                        formik.setFieldValue("lastName", text)
                    }
                    value={formik.values.lastName}
                    error={formik.errors.lastName}
                />
                <TextInput
                    label="Dirección"
                    style={[
                        formStyle.input,
                        { backgroundColor: paperTheme.colors.input },
                    ]}
                    onChangeText={(text) =>
                        formik.setFieldValue("address", text)
                    }
                    value={formik.values.address}
                    error={formik.errors.address}
                />
                <TextInput
                    label="Teléfono"
                    style={[
                        formStyle.input,
                        { backgroundColor: paperTheme.colors.input },
                    ]}
                    onChangeText={(text) => formik.setFieldValue("phone", text)}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                />
                <TouchableWithoutFeedback onPress={showDatepicker}>
                    <View>
                        <TextInput
                            label="Fecha de nacimiento"
                            style={[
                                formStyle.input,
                                { backgroundColor: paperTheme.colors.input },
                            ]}
                            value={formik.values.birthDate}
                            error={formik.errors.birthDate}
                            editable={false}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Gender gender={gender} setGender={setGender} />

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
    };
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastName: Yup.string().required(true),
        address: Yup.string().required(true),
        phone: Yup.string().required(true),
        birthDate: Yup.string().required(true),
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    btn: {
        marginBottom: 80,
        marginTop: 90,
    },
});
