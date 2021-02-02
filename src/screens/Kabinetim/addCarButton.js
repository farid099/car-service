import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {colors,lang} from '../../components/consts'

const addCarButton = () => {

    return (
        <View style={styles.container}>
            <View style={styles.rectangleShapeView}>
                <Text style={styles.text}>{lang.add_car}</Text>
            </View>
        </View>
    )
}

export default addCarButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 40,
        left: (Dimensions.get('window').width - 181 ) / 2,
    },
    rectangleShapeView: {
        marginTop: 20,
        width: 181,
        height: 39,
        borderRadius: 6,
        backgroundColor: colors.mainColor,
    },
    text: {
        alignSelf: 'center',
        paddingVertical:10,
        fontFamily : 'OpenSans-Regular',
    }
})
