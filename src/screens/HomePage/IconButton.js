import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../components/consts'

const IconButton = ({icon,text,onPress}) => {
    
    return (
        <TouchableOpacity
            onPress = {onPress}
        >
            <View style={styles.container}>
                <View style={styles.ellipse} >
                    {icon}
                </View>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
        
            
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center' ,
    },
    ellipse : {
        width: 87,
        height: 87,
        justifyContent: 'center',
        alignItems: 'center' ,
        backgroundColor: colors.mainColor,
        borderRadius: 50,
    },
    text : {

        marginTop: 11,
        fontSize : 18,
    }
})
