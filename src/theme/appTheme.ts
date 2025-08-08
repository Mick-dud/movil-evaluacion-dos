import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: SECUNDARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
    },
    image: {
        width: 350,
        height: 350,
        marginBottom: 20,
    },
    title: {
        fontSize: 35,
        marginBottom: 20,
        fontWeight: 'bold',
    },

});