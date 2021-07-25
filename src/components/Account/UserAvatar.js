import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function UserAvatar({ user, urlPhoto }) {

    return (
        <View style={ styles.container }>
            <Image
                source={{
                    uri: `${ urlPhoto }`,
                }}
                style={ styles.avatar }
            />
            <Text style={ styles.textName }>{ user }</Text>
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
