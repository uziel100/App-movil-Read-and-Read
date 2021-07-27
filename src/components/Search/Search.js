import React, { useState } from "react";
import { useNavigation} from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import colors from "../../styles/colors";

export default function Search() {

    const navigation = useNavigation();
   
    const [searchQuery, setSearchQuery] = useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    const onSearch = () => {        
        navigation.navigate("search", { query:  searchQuery });
        setSearchQuery("");
    };

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onSubmitEditing={ onSearch }
            placeholder="Ecuentra tus ebooks"
            inputStyle={ styles.inputStyle }
            iconColor="#134E5E"
            style={ styles.bg }            
        />
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        color: "#000",
        borderColor: "#fff",
        shadowOpacity: 0
    },

    bg:{
        backgroundColor: "#fff" 
    }
    
});
