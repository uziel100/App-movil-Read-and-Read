import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import { formStyle } from "../../styles";
import { loginApi, loginWithGoogleApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import { CONFIG_GOOGLE_SIGN_IN } from "../../utils/constants";

WebBrowser.maybeCompleteAuthSession();

export default function FormLogin() {
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                const response = await loginApi(formData);
                if (!response.status) throw response.message;
                login(response);
            } catch (error) {
                Toast.show({
                    text1: error,
                    autoHide: true,
                    type: "error",
                    topOffset: 50,
                    position: "top",
                });
                setLoading(false);
            }
        },
    });

    const [requestToken, responseToken, promptAsyncToken] =
        Google.useIdTokenAuthRequest(CONFIG_GOOGLE_SIGN_IN);

    const handleLoginWithGoogle = async () => {
        setGoogleLoading(true);
        try {
            await promptAsyncToken();

            if (responseToken?.type === "success") {
                const {
                    params: { id_token },
                } = responseToken;
                const response = await loginWithGoogleApi({
                    idtoken: id_token,
                });
                console.log(response);
                if (!response.status) throw response.message;
                login(response);
            } else {
                Toast.show({
                    text1: "Ha ocurrido un error",
                    text2: "Por favor intentalo de nuevo",
                    autoHide: true,
                    type: "error",
                    topOffset: 50,
                    position: "top",
                });
                setGoogleLoading(false);
            }
        } catch (error) {
            Toast.show({
                text1: error,
                autoHide: true,
                type: "error",
                topOffset: 50,
                position: "top",
            });
            setGoogleLoading(false);
        }
    };

    return (
        <View>
            <Button
                mode="contained"
                icon="google"
                style={formStyle.btn}
                contentStyle={styles.btnGoogleContent}
                labelStyle={styles.btnGoogleLabel}
                onPress={() => handleLoginWithGoogle()}
                loading={googleLoading}
            >
                Login con Google
            </Button>
            <Text style={formStyle.textInput}>Tu correo</Text>
            <TextInput
                label=""
                mode="outlined"
                style={formStyle.input}
                dense
                onChangeText={(text) => formik.setFieldValue("email", text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <Text style={formStyle.textInput}>Tu contraseña</Text>
            <TextInput
                label=""
                secureTextEntry={showPassword}
                style={[formStyle.input]}
                dense
                right={
                    <TextInput.Icon
                        name={showPassword ? "eye-off" : "eye"}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
                mode="outlined"
                onChangeText={(text) => formik.setFieldValue("password", text)}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <Button
                mode="contained"
                style={formStyle.btnAccent}
                onPress={formik.handleSubmit}
                loading={loading}
            >
                Entrar
            </Button>
        </View>
    );
}

const initialValues = () => {
    return {
        email: "",
        password: "",
    };
};

const validationSchema = () => {
    return {
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    };
};

const styles = StyleSheet.create({
    btnGoogleContent: {
        backgroundColor: "#fff",
    },
    btnGoogleLabel: {
        color: "#000",
    },
});

// theme={{ colors: { primary: 'green',underlineColor:'transparent',}}} change color border input
