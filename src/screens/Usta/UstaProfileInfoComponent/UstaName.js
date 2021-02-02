import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserIcon from '../../../components/icons/userIcon'

const UstaName = (props) => {
    return (
        <View style={styles.container}>
            <UserIcon style={styles.icon} />
            <View>
                <Text style = {styles.text} >{props.name}</Text>
                <Text style = {styles.text} >{props.profession}</Text>
            </View>
            
        </View>
    )
}

export default UstaName

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 14,
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
        marginTop : 4,
        marginEnd : 5,
    }
})
