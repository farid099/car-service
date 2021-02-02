import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import ProfilIcon from '../../components/icons/ProfilIcon'

const profilFoto = () => {

    const insets = useSafeAreaInsets()

    return (
        <View style={styles.container}>
            <ProfilIcon style={[styles.profilIcon,{top:44+insets.top}]} />
            <Image 
                    style={[styles.stretch,{top:57+insets.top}]}
                    source={require('../../components/img/user.png')}
                />
            <View style={styles.userInfo} />
                
        </View>
    )
}

export default profilFoto

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profilIcon: {
        position: 'absolute',
        left:(Dimensions.get('window').width - 146 ) / 2,
        top:47,
    },
    stretch: {
        position: 'absolute',
        width: 120,
        height: 120,
        left:(Dimensions.get('window').width - 120 ) / 2,
        top:57,
    },
})
