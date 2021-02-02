import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import DrawerMenuOpenCloseIcon from '../../components/icons/DrawerMenuOpenCloseIcon'

const drawerButton = () => {
    return (
        <TouchableOpacity >
            <DrawerMenuOpenCloseIcon style={styles.drawerMenuOpenCloseIcon}/>
        </TouchableOpacity>
    )
}

export default drawerButton

const styles = StyleSheet.create({
    drawerMenuOpenCloseIcon : {
        marginLeft: 19,
        marginTop: 19,
    }

})
