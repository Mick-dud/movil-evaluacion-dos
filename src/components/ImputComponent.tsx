import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export const ImputComponent = () => {
    return (
        <TextInput
            placeholder="Escribe algo..."
            keyboardType='default'
            style={styles.input}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
        borderRadius: 5
    }
})