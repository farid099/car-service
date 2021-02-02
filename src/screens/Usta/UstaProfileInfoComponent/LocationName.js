import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import LocationIcon from '../../../components/icons/locationIcon'

const LocationName = (props) => {
    return (
        <View style={styles.container}>
            <LocationIcon style={styles.icon} />
            <View style={{width: 160}}>
                <Text
                numberOfLines={3} 
                ellipsizeMode={'tail'}
                style = {styles.text} >
                    {props.name}
                </Text>
            </View>
            
        </View>
    )
}

export default LocationName

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left:(Dimensions.get('window').width - 160 ) / 2,
        top: 260,
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
