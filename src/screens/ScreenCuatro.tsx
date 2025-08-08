import React, { useState } from 'react'
import { Alert, Text, TextInput, TextInputComponent, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { styles } from '../theme/appTheme'
import { ButtonComponent } from '../commons/ButtonComponent'
import { INPUT_COLOR } from '../commons/constants'
import { CommonActions, useNavigation } from '@react-navigation/native'



export const ScreenCuatro = () => {
    const navigation = useNavigation()

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState('');

    const dividir = () => {
        const div1 = parseFloat(num1); //div1 = dividendo uno
        const div2 = parseFloat(num2); //div2 = dividendo dos

        //validaciones
        if (num1 === '' || num2 === '') {
            Alert.alert('Error', 'Por favor completa ambos campos.');
            return;
        }

        if (div1 <= div2) {
            setResultado('Numero 1 es menor o igual que Número 2');
        } else if (div1 === div2) {
            setResultado('Los números son iguales');
        } else {
            setResultado('Numero 1 es mayor que Número 2');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ejercicio 1</Text>
            <TextInput
                value={num1}
                onChangeText={setNum1}
                placeholder="Número 1"
                style={{ backgroundColor: '#fff', borderColor: INPUT_COLOR, marginBottom: 10 }}
            />
            <TextInput
                value={num2}
                onChangeText={setNum2}
                placeholder="Número 2"
                style={{ backgroundColor: '#fff', borderColor: INPUT_COLOR }}
            />
            <ButtonComponent
                textButton="Ejecutar"
                handlePress={dividir}
            />

            <Text style={{ fontSize: 20, marginTop: 20 }}>{resultado}</Text>
            <ButtonComponent
                textButton="Retroceder"
                handlePress={() => navigation.dispatch(CommonActions.navigate({ name: 'Home' }))}
            />
        </View>
    )
}

