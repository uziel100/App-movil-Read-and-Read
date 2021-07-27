import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import useAuth from "../../hooks/useAuth";
import Menu from "../../components/Account/Menu";
import UserAvatar from "../../components/Account/UserAvatar";

export default function Account() {    
    const { auth } = useAuth();
    
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
