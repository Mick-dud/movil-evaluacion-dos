import React from 'react'
import { Image, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { ButtonComponent } from '../commons/ButtonComponent'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'


export const ScreenDos = () => {
    const navigation = useNavigation ()
    return (
        <View style={styles.container}>
            <TitleComponent title="Pantalla Dos" />
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwZnVubnl8ZW58MHx8MHx8fDA%3Da' }}
            style={styles.image}
            />
            <ButtonComponent  
                textButton="Regresar"
                handlePress={() => navigation.dispatch(CommonActions.navigate({name:'Home'}))}
            />
        </View>
    )
}
