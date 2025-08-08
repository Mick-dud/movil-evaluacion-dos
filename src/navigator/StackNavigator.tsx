import { createStackNavigator } from '@react-navigation/stack';
import { ScreenUno } from '../screens/ScreenUno';
import { ScreenDos } from '../screens/ScreenDos';
import { ScreenTres } from '../screens/ScreenTres';
import { ScreenCuatro } from '../screens/ScreenCuatro';
import { ScreenCinco } from '../screens/ScreenCinco';

const Stack = createStackNavigator();

export const StackNavigator =() => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{headerShown: false}} component={ScreenUno} />
            <Stack.Screen name="ScreenDos" options={{headerShown: false}} component={ScreenDos} />
            <Stack.Screen name="ScreenTres" options={{headerShown: false}} component={ScreenTres} />
            <Stack.Screen name="ScreenCuatro" options={{headerShown: false}} component={ScreenCuatro} />
            <Stack.Screen name="ScreenCinco" options={{headerShown: false}} component={ScreenCinco} />
        </Stack.Navigator>
    );
}