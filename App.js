import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { setTokenApi, getTokenApi, delTokenApi } from "./src/api/token";
import { getUsernameApi, setUsernameApi } from "./src/api/username";
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
                const decoded = jwtDecode(token);
                const username = getUsernameApi();
                setAuth({
                    token,
                    idUser: decoded.user._id,                    
                    username,
                    photo: decoded.user.photo,
                    email: decoded.user.email
                });
            } else {
                setAuth(null); 
            }
        })();
    }, []);

    const login = (user) => {
        setTokenApi(user.token);
        setUsernameApi( user.user?.username || '' );
        setAuth({
            token: user.token,
            idUser: user.user._id,
            username: user.user.username,
            photo: user.user.photo,
            email: user.user.email
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
