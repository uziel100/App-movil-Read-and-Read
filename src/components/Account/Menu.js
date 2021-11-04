import React, { useState } from "react";
import { Button, List, Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, Switch, View } from "react-native";
import useAuth from "../../hooks/useAuth";
import colors from "../../styles/colors";

export default function Menu() {
    const { logout, theme, toggleTheme } = useAuth();
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        toggleTheme()
    } 

    const paperTheme = useTheme();

    const logoutApp = () => {
        Alert.alert(
            "Cerrar sessión",
            "¿Estás seguro de que quieres salir de la aplicación?",
            [
                {
                    text: "NO",
                },
                {
                    text: "SI",
                    onPress: logout,
                },
            ],
            { cancelable: false }
        );
    };
    return (
        <View style={{ marginBottom: "40%", backgroundColor: paperTheme.colors.surface }}>
            <List.Section>
                <List.Subheader>Mi cuenta</List.Subheader>
                <List.Item
                    title="Cambiar datos personales"
                    description="Actualiza tu información"
                    left={(props) => <List.Icon {...props} icon="face" />}
                    onPress={() => navigation.navigate("change-name")}
                />
                <List.Item
                    title="Cambiar username"
                    description="Cambia el alias de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="at" />}
                    onPress={() => navigation.navigate("change-username")}
                />
            </List.Section>
            <List.Section>
                <List.Subheader>Aplicación</List.Subheader>
                <List.Item
                    title="Acerca de la aplicación"
                    description="Conoce acerca de la plataforma"
                    left={(props) => (
                        <List.Icon {...props} icon="application" />
                    )}
                    onPress={() => navigation.navigate("about-app")}
                />
                 <List.Item
                    title="Tienes dudas"
                    description="Contactanos"
                    left={(props) => (
                        <List.Icon {...props} icon="information-outline" />
                    )}
                    onPress={() => navigation.navigate("contact")}
                />
                <List.Item
                    title="Modo oscuro"                    
                    left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
                    right={(props) => <Switch
                        trackColor={{ false: '#ccc', true: '#ccc' }}
                        thumbColor={isEnabled ? colors.accent : '#fff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />}
                    onPress={ toggleSwitch }
                />
            </List.Section>
            <View style={styles.containerLogout}>
                <Button
                    onPress={logoutApp}
                    style={styles.btnLogout}
                    mode="text"
                >
                    Cerrar sesión
                </Button>
                <Text style={styles.versionApp}>Read&Read v1.0.0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    versionApp: {
        fontSize: 16,
        marginTop: 20,
        color: "#666",
    },
    containerLogout: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    btnLogout: {
        marginVertical: 15,
    },
});
