import React from 'react'
import { View, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function BookItem() {
    return (
        <Card mode="outlined" style={{ width: 100, marginBottom: 5 }} >
            <Card.Cover style={{ width: '100%', height: 150 }} source={ require('../../../assets/bookCover.jpg') } />                                        
            <Paragraph style={{ fontSize: 11, paddingHorizontal: 3 }} numberOfLines={1} >Song with souls birds</Paragraph>            
        </Card>
    )
}
