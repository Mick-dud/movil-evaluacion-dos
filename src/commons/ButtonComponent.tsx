import React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { INPUT_COLOR } from './constants';

interface Props {
    textButton: string;
    handlePress: () => void;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
}

export const ButtonComponent = ({ textButton, handlePress, buttonStyle, textStyle }: Props) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={handlePress}>
            <Text style={[styles.buttonText, textStyle]}>{textButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: INPUT_COLOR, // color base
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,        
        margin: 10,
        alignSelf: 'center',
        width: '50%',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
