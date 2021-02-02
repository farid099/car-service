import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import IconButton from './IconButton'
import {lang} from '../../components/consts'
import {useNavigation} from '@react-navigation/native'
import CarRepairButtonIcon from '../../components/icons/CarRepairButtonIcon'
import CarServicesIcon from '../../components/icons/carServicesIcon'
import UstaButtonIcon from '../../components/icons/UstaButtonIcon'
import ShopButtonIcon from '../../components/icons/ShopButtonIcon'




const Buttons = () => {

    const navigation = useNavigation()

    const onPress = () => {
    }

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <View style={styles.row}>
                    <IconButton
                        onPress = {() => {navigation.navigate('kabinetim')}}
                        icon = {<CarRepairButtonIcon />}
                        text={lang.kabinetim}/>
                    <IconButton
                    onPress = {() => {navigation.navigate('kabinetim')}}
                    icon = {<CarServicesIcon />}
                    text={lang.avto_servisim}/>
                </View>
                <View style={styles.row}>
                    <IconButton 
                        onPress = {() => {navigation.navigate('usta')}}
                        icon = {<UstaButtonIcon />}
                        text={lang.usta}/>
                    <IconButton
                        onPress = {() => {navigation.navigate('shop')}}
                        icon = {<ShopButtonIcon />}
                        text={lang.avto_magaza}/>
                </View>
            </View>
        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop:19,
        justifyContent: 'flex-start',
    },
    row : {
        flexDirection: 'row',
        justifyContent : 'space-around',
        marginBottom:38,
    },
    column : {
        flex:1,
        justifyContent : 'flex-start'
    }
})
