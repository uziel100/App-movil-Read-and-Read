import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import img from "../../../assets/wishlist-empty.png";
const height = Dimensions.get("window").height / 6;
export default function EmptyWishlist() {
    return (
        <View style={{ marginTop: height, alignItems: "center" }}>
        <Image
            style={{
                width: "100%",
                height: 180,
                resizeMode: "contain",
            }}
            source={ img }
        />
        <Text
            style={{
                marginVertical: 15,
                fontSize: 16,
                color: "#555",
            }}
        >
            No has agregado libro aún
        </Text>
    </View>
    )
}
