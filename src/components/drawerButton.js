import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler'

import DrawerMenuOpenCloseIcon from './icons/DrawerMenuOpenCloseIcon'
import { useNavigation } from '@react-navigation/native';

const drawerButton = () => {

    const navigation = useNavigation();

    const toogleDrawer = () => {
        navigation.toggleDrawer()
    }

    return (
        <TouchableOpacity
            style={{flex:1}}
            onPress={toogleDrawer}>
            <DrawerMenuOpenCloseIcon />
        </TouchableOpacity>
    )
}

export default drawerButton

const styles = StyleSheet.create({

})
