import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {colors,lang} from '../../components/consts'

const SubmitButton = () => {

    return (
        <TouchableOpacity
        activeOpacity = {0.7}
        style={styles.rectangleShapeView}
        onPress={() => {}}
        >
            <Text>Submit</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    rectangleShapeView: {
        marginTop: 20,
        marginHorizontal : 70,
        paddingVertical : 10,
        fontFamily : "OpenSans-Regular",
        fontSize : 12,
        borderRadius: 6,
        backgroundColor: colors.mainColor,
        justifyContent:"center",
        alignItems: "center",
    },
})
