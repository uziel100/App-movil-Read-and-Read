import React, { useState, useEffect, useCallback } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    ScrollView,
    Text,
    Dimensions,
} from "react-native";
import { Button } from "react-native-paper";
import welcome from "../../assets/logo-bg.png";
import welcome1 from "../../assets/p2.png";
import welcome2 from "../../assets/p3.png";
import Carousel, { Pagination } from "react-native-snap-carousel";
const width = Dimensions.get("window").width;

export default function Welcome({ setIsWelcome }) {
    const [bannerActive, setBannerActive] = useState(0);
    const banners = [
        {
            text: "Bienvenid@ ¡Gracias por configurar tu perfil! Un mundo de historias te espera...",
            image: welcome,
        },
        {
            text: "Ahora ya formas parte de los más de 100,000 lectores, sigue con nosotros...",
            image: welcome1,
        },
        {
            text: "Disfruta de tus lecturas como un regalo que puedes abrir una y otra vez.",
            image: welcome2,
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image style={styles.welcome} source={item.image} />
                <Text style={styles.titleWelcome}>{item.text}</Text>
            </View>
        );
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <View style={{ paddingVertical: 20, }}>
                    <Image
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            left: 0,
                            top: 0,
                            width,
                            height: '55%',
                            resizeMode: 'stretch'
                        }}
                        source={require("../../assets/fondoWelcome.png")}
                    />
                    <Carousel
                        layout={"default"}
                        containerCustomStyle={{ zIndex: 10, marginTop: 120, }}
                        autoplayInterval={2300}
                        lockScrollWhileSnapping={true}
                        loop={true}
                        enableSnap={true}
                        sliderWidth={width}
                        itemWidth={width}
                        data={banners}
                        renderItem={renderItem}
                        onSnapToItem={(index) => setBannerActive(index)}
                    />

                    <Pagination
                        dotsLength={banners.length}
                        activeDotIndex={bannerActive}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                    {bannerActive === banners.length - 1 && (
                        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                            <Button
                                mode="contained"
                                color="#147"
                                onPress={() => setIsWelcome(false)}
                                style={{ borderRadius: 20, height: 45, width: (width - 40) }}
                                labelStyle={{ fontSize: 16 }}
                            >
                                Comenzar
                            </Button>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    welcome: {
        resizeMode: "contain",
        width,
        height: "65%",
        justifyContent: "center",
    },
    titleWelcome: {
        paddingHorizontal: 25,
        fontSize: 22,
        textAlign: "center",
        color: "#454546",
        paddingTop: 60,
    },
});

