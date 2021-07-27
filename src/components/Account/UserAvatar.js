import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import defaultAvatar from '../../../assets/default-avatar.png'
export default function UserAvatar({ user, urlPhoto }) {
    console.log('photo: ',urlPhoto )

    const setAvatar = (urlPhoto) => {
        const dataImg = {
            uri: `${ urlPhoto }`
        }
        const image = !urlPhoto ? defaultAvatar : dataImg
        return image
    }

    return (
        <View style={ styles.container }>
            <Image
                source={ setAvatar(urlPhoto) }
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
