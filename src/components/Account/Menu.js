import React from "react";
import { Button, List, Paragraph, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import useAuth from "../../hooks/useAuth";

export default function Menu() {
    const { logout } = useAuth();
    const navigation = useNavigation();

    return (
        <View style={ { marginBottom: '40%' } }>
            <List.Section>
                <List.Subheader>Mi cuenta</List.Subheader>
                <List.Item
                    title="Cambiar datos personales"
                    description="Cambia el alias de tu cuenta"
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
                        <List.Icon {...props} icon="clipboard-list" />
                    )}
                    onPress={() => navigation.navigate("Acerca-De-App")}
                />
                <List.Item
                    title="Modo oscuro"
                    description="Cambia el tema de la aplicación"
                    left={(props) => <List.Icon {...props} icon="heart" />}
                    onPress={() => console.log("Modo Oscuro")}
                />                
            </List.Section>
            <View style={ styles.containerLogout } >
                <Button onPress={logout} style={ styles.btnLogout } mode="text">Cerrar sesión</Button>
                <Text style={ styles.versionApp } >Read&Read v1.0.0</Text>    
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    versionApp: {
        fontSize: 16,        
        marginTop: 20,
        color: '#666'
    },
    containerLogout:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    btnLogout:{
        marginVertical: 15
    }
})

