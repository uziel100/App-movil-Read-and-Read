import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from "react-native-paper";
import { setTokenApi, getTokenApi, delTokenApi } from "./src/api/token";
import { getUsernameApi, setUsernameApi } from "./src/api/username";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { SafeAreaProvider } from "react-native-safe-area-context";
import jwtDecode from "jwt-decode";
import Toast from "react-native-toast-message";
import AuthContext from "./src/context/AuthContext";
import AppNavigation from "./src/navigation/AppNavigation";
import AuthScreen from "./src/screens/Auth";
import colors from "./src/styles/colors"
import Welcome from "./src/screens/Welcome"

export default function App() {
    const [isWelcome, setIsWelcome] = useState(true)
    const [auth, setAuth] = useState(undefined);
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(
        colorScheme === "dark" ? "dark" : "light"
    );

    const toggleTheme = (selectTheme) => {
        if (!selectTheme) {
            setTheme(theme === "light" ? "dark" : "light");
        } else {
            setTheme(selectTheme);
        }

    };


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
                    email: decoded.user.email,
                });
            } else {
                setAuth(null);
            }
        })();
    }, []);

    const login = (user) => {
        setTokenApi(user.token);
        setUsernameApi(user.user?.username || "");
        setAuth({
            token: user.token,
            idUser: user.user._id,
            username: user.user.username,
            photo: user.user.photo,
            email: user.user.email,
        });
    };

    const logout = () => {
        if (auth) {
            toggleTheme('light')
            delTokenApi();
            setAuth(null);
        }
    };

    const authData = useMemo(
        () => ({
            auth,
            login,
            logout,
            toggleTheme,
            theme
        }),
        [auth, theme]
    );

    if (auth === undefined) return null;

    return (
        <SafeAreaProvider>
            <AppearanceProvider>
                <AuthContext.Provider value={authData}>
                    <PaperProvider
                        theme={
                            theme === "light"
                                ? {
                                    ...DefaultTheme,
                                    colors: {
                                        ...DefaultTheme.colors,
                                        version: "#666",
                                        navegation: colors.bgNavigation,
                                        input: colors.bgLight,
                                        search: "#fff",
                                        iconSearch: "#134E5E",
                                        titleSelection: "#555",
                                        ScreenLoading: "#000",
                                    },
                                }
                                : {
                                    ...DarkTheme,
                                    colors: {
                                        ...DarkTheme.colors,
                                        surface: "#18191a",
                                        version: "#fff",
                                        navegation: "#242526",
                                        input: "#3a3b3c",
                                        search: "#303134",
                                        iconSearch: "#666",
                                        titleSelection: "#fff",
                                        ScreenLoading: colors.accent,
                                    },
                                }
                        }
                        style={styles.container}
                    >
                        {(isWelcome && !auth) ?
                            <Welcome setIsWelcome={ setIsWelcome } /> : auth ?
                                <AppNavigation /> : <AuthScreen />
                        }
                    </PaperProvider>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </AuthContext.Provider>
            </AppearanceProvider>
        </SafeAreaProvider>
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
