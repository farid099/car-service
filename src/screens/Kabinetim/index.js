import React from 'react'
import { SafeAreaView, View,Text } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import styles from './styles'
import DrawerButton from '../../components/drawerButton'
import GearIcon from '../../components/icons/GearIcon'
import GearIconAlt from '../../components/icons/GearIconAlt'
import ProfilFoto from './profilFoto'
import UserInfoCard from './userInfoCard'
import CarList from './carList'
import AddCarButton from './addCarButton'

const index = () => {

    //çeltikli telefonlardaki boşluğu hesaba katmak için kullanılıyor
    const insets = useSafeAreaInsets()

    return (
        <View style={styles.container}>
            <GearIcon style={styles.gearIconUst} />

            <SafeAreaView style={{flex:1}} >
                <View style={[styles.drawerMenu,{top:insets.top == 0 ? 13 : insets.top}]} >
                    <DrawerButton  />
                </View>
                
                <Text style={[styles.title,{top:insets.top == 0 ? 9 : insets.top}]} >Kabinetim</Text>

                <GearIconAlt style={[styles.gearIconAlt,{top:insets.top+115}]} />
                <ProfilFoto  />
                <UserInfoCard email="babayev@gmail.com" name="Farid Babayev"/>
                <CarList />
                <AddCarButton />
            </SafeAreaView>
        </View>
    )
}

export default index


