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
            iconColor="#134E5E"
            style={{ backgroundColor: "#c2e4ca" }}
        />
    );
}
