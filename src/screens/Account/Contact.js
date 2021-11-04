import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, Button, useTheme, Text } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";
import { getContact } from "../../api/contact";
import useAuth from "../../hooks/useAuth";
import colors from "../../styles/colors";

export default function Contact() {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const paperTheme = useTheme();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getContact(auth);
        await formik.setFieldValue("name", response.name);
        await formik.setFieldValue("email", response.email);
        await formik.setFieldValue("email", response.phone);
        await formik.setFieldValue("email", response.commentary);
      })();
    }, [])
  );
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        await getContact(auth, formData);
        navigation.goBack();
      } catch (error) {
        Toast.show({
          text1: "Ha ocurrido un error",
          autoHide: true,
          type: "error",
          topOffset: 80,
          position: "top",
        });
      }
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: paperTheme.colors.surface }}>
      <LinearGradient
        style={styles.containerBackground}
        colors={[colors.accent, "#7559cb"]}
      >
        <View>
          <View style={styles.line}></View>
          <Text style={styles.titleR}>Read&Read</Text>
        </View>
        <Text style={styles.title}>¿Qué podemos hacer por ti?</Text>
      </LinearGradient>
      <View style={styles.box}>
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
          label="Correo electronico"
          style={[
            formStyle.input,
            { backgroundColor: paperTheme.colors.input },
          ]}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <TextInput
          label="Nombre de telefono"
          style={[
            formStyle.input,
            { backgroundColor: paperTheme.colors.input },
          ]}
          onChangeText={(text) => formik.setFieldValue("phone", text)}
          value={formik.values.phone}
          error={formik.errors.phone}
        />
        <TextInput
          label="Comentario"
          style={[
            formStyle.input,
            { backgroundColor: paperTheme.colors.input },
          ]}
          multiline={true}
          numberOfLines={7}
          onChangeText={(text) => formik.setFieldValue("commentary", text)}
          value={formik.values.commentary}
          error={formik.errors.commentary}
        />
        <Button
          mode="contained"
          style={[formStyle.btnAccent, styles.btn]}
          onPress={formik.handleSubmit}
          disabled={loading}
          loading={loading}
        >
          Enviar
        </Button>
      </View>
    </View>
  );
}

function initialValues() {
  return {
    name: "",
    email: "",
    phone: "",
    commentary: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    phone: Yup.string().max(10).required(true),
    commentary: Yup.string().required(true),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  box: {
    padding: 35,
  },
  containerBackground: {
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    padding: 50,
    fontSize: 32,
    fontWeight: "bold",
    color: colors.bgLight,
  },
  titleR: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.bgLight,
  },
  btn: {
    marginBottom: 80,
    marginTop: 50,
  },
  line: {
    width: 100,
    height: 5,
    backgroundColor: "#fff",
  },
});
