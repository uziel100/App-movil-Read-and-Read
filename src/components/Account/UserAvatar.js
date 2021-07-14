import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function UserAvatar(props) {
    const { user } = props;    

    return (
        <View style={ styles.container }>
            <Image
                source={{
                    uri: "https://i.pravatar.cc/300",
                }}
                style={ styles.avatar }
            />
            <Text style={ styles.textName }>Uziel Meliton Hernandez</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomColor: '#ccc',    
        borderBottomWidth: 1
    },
    avatar:{
        width: 120,
        height: 120,
        resizeMode: 'contain',
        borderRadius: 120,
    },
    textName: {
        marginTop: 10,
        fontSize: 18,
        color: '#888'
    }   
});
