import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { setTokenApi, getTokenApi, delTokenApi } from "./src/api/token";
import jwtDecode from "jwt-decode";
import Toast from 'react-native-toast-message';
import AuthContext from "./src/context/AuthContext";
import AppNavigation from "./src/navigation/AppNavigation";
import AuthScreen from "./src/screens/Auth";

export default function App() {
    const [auth, setAuth] = useState(undefined);

    useEffect(() => {
        (async () => {
            const token = await getTokenApi();
            if (token) {
                setAuth({
                    token,
                    idUser: jwtDecode(token)._id,
                });
            } else {
                setAuth(null); 
            }
        })();
    }, []);

    const login = (user) => {
        setTokenApi(user.token);
        setAuth({
            token: user.token,
            idUser: user.user._id,
        });
    };

    const logout = () => {
        if (auth) {
            delTokenApi();
            setAuth(null);
        }
    };

    const authData = useMemo(
        () => ({
            auth,
            login,
            logout,
        }),
        [auth]
    );

    if (auth === undefined) return null;

    return (
        <AuthContext.Provider value={ authData } >
            <PaperProvider style={styles.container}>                            
                {auth ? <AppNavigation /> : <AuthScreen />}
                {/* <AppNavigation /> */}
            </PaperProvider>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 29,
        color: "#555",
        fontWeight: "bold",
        textAlign: "center",
    },
});
