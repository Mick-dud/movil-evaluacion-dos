import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constants';

interface Props{
    title: string;    
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{ ...styles.title, height: height * 0.30 }}>{title}</Text>
    )
}

export const styles = StyleSheet.create({
    title: {
        color: PRIMARY_COLOR,
        fontSize: 39,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 27,
        paddingTop: 160,
        alignSelf:'center',
        alignItems: 'flex-end',
    },
});