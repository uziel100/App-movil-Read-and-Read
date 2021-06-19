import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const Fab = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ backgroundColor: "blue", padding: 15, borderRadius: 50 }}
        >
            <Text style={{ fontSize: 18, color: "#fff" }}>{title}</Text>
        </TouchableOpacity>
    );
};
