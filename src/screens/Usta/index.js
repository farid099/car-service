import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Dimensions } from 'react-native'
import {colors} from '../../components/consts'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import DrawerButton from '../../components/drawerButton'

import UstaPageTopBg from '../../components/icons/UstaPageTopBg'
import GearIconUst from '../../components/icons/GearIcon'
import GearIconAlt from '../../components/icons/GearIconAlt'
import UstaPageBackgroundImage from '../../components/icons/UstaPageBackgroundImage'
import Data from './Data'
const index = () => {

    //çeltikli telefonlardaki boşluğu hesaba katmak için kullanılıyor
    const insets = useSafeAreaInsets()
    return (
        <View style = {styles.container}>
            <SafeAreaView style={[styles.header,{height:50}]} />
            <View style={[styles.drawerButton,{top:insets.top == 0 ? 20 : insets.top}]}>
                    <DrawerButton />
            </View>
            <Text style={[styles.title,{top:insets.top == 0 ? 20 : insets.top}]} >Ustalar</Text>

            <UstaPageTopBg style={styles.headerBg} />
            <GearIconUst style = {styles.gearIconUst} />
            <GearIconAlt style = {styles.gearIconAlt} />
            <UstaPageBackgroundImage style = {styles.workerImage} />
            <Data />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    HeaderBg:{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex : -1,
        elevation: 1,
    },
    gearIconUst : {
        position: 'absolute',
        top: 75,
        right: 0,
    },
    gearIconAlt : {
        position: 'absolute',
        top: 215,
        left: 0,
    },
    header : {
        flex: 0,
        backgroundColor:colors.bg

    },
    workerImage : {
        position: 'absolute',
        left:(Dimensions.get('window').width - 221 ) / 2,
        top:97,
    },
    drawerButton : {
        flexDirection: 'row',
        position: 'absolute',
        zIndex : 9,
        top:10,
        left: 19,
        elevation: 3,
    },
    title : {
        alignSelf : 'flex-end',
        fontFamily : "OpenSans-Regular",
        fontSize : 18,
        color : colors.mainColor,
        position: 'absolute',
        top:5,
        right: 19,
        zIndex : 9,
        elevation: 3,
    }
})
