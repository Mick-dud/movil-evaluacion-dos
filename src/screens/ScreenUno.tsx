import React from 'react'
import { View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { ButtonComponent } from '../commons/ButtonComponent'

export const ScreenUno = ({ navigation }: any) => {
    return (
        <View>
            <TitleComponent title="Pantalla Uno" />
            <ButtonComponent
                textButton="Imagen 1"
                handlePress={() => navigation.navigate('ScreenDos')} 
            />
            <ButtonComponent
                textButton="Imagen 2"
                handlePress={() => navigation.navigate('ScreenTres')} 
            />
            <ButtonComponent
                textButton=">="
                handlePress={() => navigation.navigate('ScreenCuatro')} 
            />
            <ButtonComponent
                textButton="<="
                handlePress={() => navigation.navigate('ScreenCinco')} 
            />
        </View>
    )
}
