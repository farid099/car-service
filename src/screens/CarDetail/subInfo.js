import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {colors} from '../../components/consts'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

//part showing detail information under the picture
const subInfo = () => {

    const insets = useSafeAreaInsets() 

    return (
        <View style = {[styles.container, {top:insets.top + 200} ]}>
            <View style = {styles.row}>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Wolksvagen</Text>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>3600 kv</Text>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>2009</Text>
                </View>
            </View>
            <View style = {styles.row}>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Touareg</Text>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>2009</Text>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>white</Text>
                </View>

            </View>
            
        </View>
    )
}

export default subInfo

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:50,
        left:(Dimensions.get('window').width - 320 ) / 2,
        width : 320,
        height : 80,
        padding :3,
    },
    text: {
        fontFamily : "OpenSans-Regular",
        color : colors.mainColor,
        fontWeight: "bold",
        fontSize : 12,
    },
    row:{
        flex : 1,
        flexDirection : 'row',
    
    },
    textContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }

})
