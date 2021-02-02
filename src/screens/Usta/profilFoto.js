import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import ProfilIcon from '../../components/icons/ProfilIcon'

const profilFoto = () => {

    const insets = useSafeAreaInsets()

    return (
        <View style={styles.container}>
            <ProfilIcon style={[styles.profilIcon,{top:10+insets.top}]} />
            <Image 
                    style={[styles.stretch,{top:16+insets.top}]}
                    source={require('../../components/img/usta_profile.png')}
                />
                
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
        top:46,
    },
    stretch: {
        position: 'absolute',
        width: 133,
        height: 133,
        left:(Dimensions.get('window').width - 133 ) / 2,
        top:57,
    },
})
