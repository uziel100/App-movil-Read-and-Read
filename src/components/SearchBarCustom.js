import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

export default function SearchBarCustom() {

    const [searchQuery, setSearchQuery] = useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            placeholder="Ecuentra tus ebooks"
            inputStyle={{
                color: "#000",
                borderColor: "#fff",
                shadowOpacity: 0,
            }}
            iconColor="#397f77"
            style={{ backgroundColor: "#6e9c94" }}
        />
    );
}
