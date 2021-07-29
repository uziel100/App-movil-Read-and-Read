import React, { useState } from "react";
import { useNavigation} from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Searchbar, useTheme } from "react-native-paper";
import colors from "../../styles/colors";

export default function Search() {

    const navigation = useNavigation();
   
    const [searchQuery, setSearchQuery] = useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    const paperTheme = useTheme();

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
            iconColor={paperTheme.colors.iconSearch}
            style={ { backgroundColor: paperTheme.colors.search} }            
        />
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: "#fff",
        shadowOpacity: 0
    },

    bg:{
        backgroundColor: "#fff" 
    }
    
});
