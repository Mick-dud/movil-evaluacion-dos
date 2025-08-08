import React from 'react'
import { Image, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { ButtonComponent } from '../commons/ButtonComponent'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'


export const ScreenTres = () => {
    const navigation = useNavigation ()
    return (
        <View>
            <TitleComponent title="Pantalla Tres" />
            
            <Image
                source={{ uri: 'https://tripetto.com/images/alternatives/wpforms.png' }}
            style={styles.image}
            />
            <ButtonComponent
                textButton="Regresar"
                handlePress={() => navigation.dispatch(CommonActions.navigate({name:'Home'}))}
            />
        </View>
    )
}
