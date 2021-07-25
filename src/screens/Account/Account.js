import React, { useState, useCallback } from "react";
import { ScrollView, View, Text, Image, Alert, StyleSheet } from "react-native";
import useAuth from "../../hooks/useAuth";
import Menu from "../../components/Account/Menu";
import { useFocusEffect } from "@react-navigation/native";
import UserAvatar from "../../components/Account/UserAvatar";

export default function Account() {
    const [user, setUser] = useState(null);
    const { auth } = useAuth();
    const { logout } = useAuth();

    const logoutAccount = () => {
        Alert.alert(
            "Cerrar sessión",
            "¿Estás seguro de que quieres salir de tu cuenta?",
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

    // useFocusEffect(
    //     useCallback(() => {
    //         (async () => {
    //             //const response = await getMeApi(auth.token);
    //             //setUser(response);
    //         })();
    //     }, [])
    // );

    {
        /*
            // Esto es un spinner para que el cliente espere a que se carguen sus datos
            !user ? (
                <ScreenLoading size="large" />
            ) : (
                <>
                    // Aquí adentro va el ScrollView
                </>
            )*/
    }

    return (        
        <ScrollView style={ styles.container }>
            <UserAvatar 
                user={ auth.email } 
                urlPhoto={ auth.photo } 
            />
            <Menu />                    
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20    
    }
})
