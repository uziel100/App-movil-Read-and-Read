import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import {    
    TouchableNativeFeedback,
    TouchableOpacity,
} from "react-native-gesture-handler";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwIcon from "react-native-vector-icons/FontAwesome";
import StatusBarCustom from "../../components/StatusBarCustom";
import { URL_IMG } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { putBookInFavoriteApi } from "../../api/books";
import useAuth from "../../hooks/useAuth";
import Toast from "react-native-toast-message";

export default function DetailBook({ route: { params } }) {
    const navigation = useNavigation();
    const { auth } = useAuth();
    const { id, favorite, ...book } = params;
    const [isInFavorites, setIsInFavorites] = useState( favorite);
    const [iconStar, setIconStar] = useState( favorite? "star" : "star-o");
    const [loading, setLoading] = useState( false );
    
    const handleFavorites = async () => {
        setLoading( true );
        try {            
            const fav = !isInFavorites;
            await putBookInFavoriteApi( auth, { 
                id, 
                isFavorite: fav 
            })                        
            setIsInFavorites( fav );            
            setIconStar(fav ? "star" : "star-o");            
        } catch (error) {
            Toast.show({
                text1: "Ha ocurrido un error",
                text2: "Intentelo de nuevo",
                autoHide: true,
                type: "error",
                topOffset: 80,
                position: "top",
            });
        }finally{
            setLoading( false );
        }                
    };

    const sliceText = (text, limit) => {
        if(text.length > limit){
            return text.slice(0, limit) + '...'
        }
        return text;
    }

    const goPdfViewer = () => {
        navigation.navigate("view-book", { title: book.title, fileName: book.fileName });
    }

    const goToAllDetail = () => {
        navigation.navigate("all-detail-book", { ...book });
    }

    return (
        <>
            <StatusBarCustom backgroundColor={"#052149"} />
            <View style={styles.container}>            
                <View style={styles.banner}>
                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={{ uri: `${URL_IMG }/${book.imgUrl}` }}
                            style={{ width: 145, height: 200 }}
                        />
                        <Text
                            style={{
                                ...styles.title,
                                color: "#fff",
                                marginTop: 16,
                                marginBottom: 16
                            }}
                        >
                            { sliceText(book.title, 50) }
                        </Text>
                    </View>
                    <View>
                        <View style={styles.boxItems}>
                            <View style={[styles.item, styles.itemBoder]}>
                                <Text style={styles.itemDesc}>4.5</Text>
                                <Text style={styles.itemValue}>Valoración</Text>
                            </View>
                            <View style={[styles.item, styles.itemBoder]}>
                                <Text style={styles.itemDesc}>{ book.numPages }</Text>
                                <Text style={styles.itemValue}>
                                    Num. paginas
                                </Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.itemDesc}>{ book.lang.name }</Text>
                                <Text style={styles.itemValue}>Idioma</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.detail}>
                    <View>
                        <View style={styles.boxTitle}>
                            <Text style={styles.title}>Acerca del libro</Text>
                            <TouchableOpacity onPress={ goToAllDetail }>
                                <IoniconsIcon
                                    style={styles.icon}
                                    name="arrow-forward-outline"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxDescription}>
                            <Text style={styles.desc}>
                                { sliceText(book.summary, 225) }
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxActions}>
                            <TouchableNativeFeedback
                                style={styles.iconFavorite}
                                onPress={handleFavorites}
                                disabled={ loading }
                            >
                                <FontAwIcon
                                    color="#EDC90F"
                                    style={styles.iconStar}
                                    name={iconStar}
                                />
                            </TouchableNativeFeedback>
                            <TouchableOpacity  style={styles.btnRead}
                                onPress={ goPdfViewer }
                            >
                                <Text style={styles.textCenter}>
                                    Iniciar lectura
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#052149",
    },
    banner: {
        flex: 5,
        backgroundColor: "#052149",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 35
    },
    detail: {
        flex: 4,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 33,
        paddingTop: 30,
        paddingBottom: 10,
        justifyContent: "space-between",
        marginTop: 16,
    },
    boxTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    boxDescription: {
        marginTop: 17,
    },
    desc: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    icon: {
        fontSize: 24,
    },
    boxActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconFavorite: {
        backgroundColor: "#EFF4FF",
        textAlign: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    iconStar: {
        fontSize: 29,
    },
    btnRead: {
        backgroundColor: "#3BD19A",
        maxWidth: 260,
        width: 225,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    textCenter: {
        textAlign: "center",
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },
    boxItems: {
        flexDirection: "row",
        backgroundColor: "#0E3B7B",
        paddingVertical: 16,
        borderRadius: 8,
        justifyContent: "space-between",
    },
    item: {
        paddingHorizontal: 20,
    },
    itemBoder: {
        borderRightWidth: 1,
        borderRightColor: "#0B2346",
    },
    itemDesc: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
    },
    itemValue: {
        textAlign: "center",
        color: "#94B2DE",
        fontSize: 12,
        marginTop: 8,
    },
});
