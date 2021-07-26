import React from "react";
import { View, Text, StyleSheet } from "react-native";
import YouBooks from "../components/YourBooks/YourBooks";
import StatusBarCustom from '../components/StatusBarCustom'
import colors from "../styles/colors";

export default function Book() {
       
    return (
        <>
            <StatusBarCustom backgroundColor={ colors.accent } />
            <View style={styles.container}>            
                <YouBooks />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {        
        padding: 10,
        flex: 1
    },
});
