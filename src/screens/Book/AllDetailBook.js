import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { List } from 'react-native-paper'
const { width } = Dimensions.get("window");

export default function AllDetailBook({ route: { params } }) {
    const { ...book } = params;

    const items = [
        {
            key: 'ISBN',
            value: book.ISBN    
        },
        {
            key: 'Idioma',
            value: book.lang.name
        },
        {
            key: 'Num. paginas',
            value: book.numPages
        },
        {
            key: 'Autor(s)',
            value: book.author.map(item => item.name).join(', ')
        },
        {
            key: 'Editorial',
            value: book.publisher.map(item => item.name).join(', ')
        },
        {
            key: 'Categoria',
            value: book.category.name
        },
        {
            key: 'Subcategoria',
            value: book.subCategory.name
        },
    ]
    return (
        <View style={styles.container} >
            <ScrollView>
                <List.Section title={book.title}>
                    <List.Accordion
                        title="Descripción"
                        style={ { paddingHorizontal: 0, marginHorizontal: 0 } }
                        titleStyle={{ color: '#444', fontWeight: 'bold' }}
                        descriptionStyle={{ color: 'red' }}
                    >
                        <Text>{book.summary}</Text>
                    </List.Accordion>
                </List.Section>
                {
                    items.map((row, idx) => (
                        <View key={idx} style={styles.item}  >
                            <View>
                                <Text style={styles.itemKey}>{row.key}: </Text>
                            </View>
                            <View>
                                <Text style={styles.itemValue}>{row.value}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    item: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 16,
        marginLeft: 6,
        width
    },
    itemKey: {
        color: '#444',
        fontWeight: 'bold', fontSize: 17, marginRight: 10
    },
    itemValue: {
        fontSize: 14
    }
})
