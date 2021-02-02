import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PhoneIcon from '../../../components/icons/phoneIcon2'

const Phone = (props) => {
    return (
        <View style={styles.container}>
            <PhoneIcon style={styles.icon} />
            <View>
                <Text style = {styles.text} >{props.phone}</Text>
            </View>
            
        </View>
    )
}

export default Phone

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 14,
        top: 230,
        flexDirection : 'row',
        alignItems : 'flex-start',
    },
    text: {
        color: 'white',
        fontWeight : '500',
        fontSize : 10,
    },
    icon: {
        marginTop : 1,
        marginEnd : 5,
    }
})
