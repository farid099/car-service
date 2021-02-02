import React from 'react'
import { StyleSheet, View,Dimensions,TouchableOpacity } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import PlusIcon from '../../components/icons/PlusIcon'

//+ button in the middle
const addButton = (props) => {

    const insets = useSafeAreaInsets() 
    
    return (
            <TouchableOpacity  
            activeOpacity = {0.7}
            style = {[styles.container, {top:insets.top + 287} ]}  >
                <View style={styles.circle} >
                    <PlusIcon />
                </View>
            </TouchableOpacity>
        
    )
}

export default addButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:50,
        left:(Dimensions.get('window').width - 39 ) / 2,
    },
    circle: {
        width: 39 ,
        height: 39,
        borderRadius: 200/2,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.55,
        shadowRadius: 2.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
