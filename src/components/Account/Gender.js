import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, LogBox } from 'react-native'
import DropDownPicker from "react-native-dropdown-picker";

export default function gender({ gender, setGender  }) {
    const [ open, setOpen ] = useState ( false );    
    const [ itemsarray, setItemsarray ] = useState ( [ 
        { label: 'Masculino', value: "Masculino"},
        { label: 'Femenino', value: "Femenino"},
    ]);

    useEffect(() => {
       LogBox.ignoreLogs(['VirtualizedLists should never be nested']); 
    }, [])

    return (
        <View>
            <Text style={ styles.label  }>Género</Text>
            <DropDownPicker
                zIndex={10}
                open={open}
                value={gender}
                items={itemsarray}
                setOpen={setOpen}
                setValue={setGender}
                setItems={setItemsarray}
                defaultValue={gender}
                containerStyle={styles.containerStyle}                                
                style={styles.picker}
                labelStyle={styles.labelStyle}
                onChangeValue={(value) => setGender(value)}
                dropDownDirection="BOTTOM"  
                mode="BADGE"              
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
      height: 50,
      width: '100%',         
    },            
    picker:{         
      borderWidth: 0,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1
    },  
    labelStyle: {
      color: "#000",
      fontSize: 15,
    },
    label:{
      fontSize: 14,
      marginLeft: 5,
      color: '#555'
    }
  });