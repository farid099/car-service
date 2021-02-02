import React from 'react'
import { StyleSheet,  View,SafeAreaView } from 'react-native'

import {DrawerItem, createDrawerNavigator,
    DrawerContentScrollView} from '@react-navigation/drawer'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {
    Drawer,
    Text,
    TouchableRipple,
    Avatar,
    Button,
    Caption,
    Paragraph } from 'react-native-paper';

import CarServicesIcon from './icons/carServicesIcon'
import CarRepairButtonIcon from './icons/CarRepairButtonIcon'
import ShopButtonIcon from './icons/ShopButtonIcon'
import UstaButtonIcon from './icons/UstaButtonIcon'
import SignOutIcon from './icons/SignOutIcon'

import {colors} from './consts'

const drawerContent = (props) => {

    const {navigation,user} = props

    const insets = useSafeAreaInsets()

    
    return(
        <SafeAreaView style={styles.container}>
            <DrawerContentScrollView {...props}  >
                <Drawer.Section style = {[styles.userInfo,{marginTop:insets.top === 0 ? 20 : 0 }]} >
                    <View style = {{alignItems: 'center'}} >
                        <Avatar.Image 
                                source={
                                        require('./img/user.png')
                                }
                                size={70}
                            />
                        <Caption style={styles.Caption}>{user.fullName}</Caption>
                    </View>
                </Drawer.Section>
                <View style={{flex: 1}}>
                    <View style={styles.content}>
                    
                        <Drawer.Section >
                            <DrawerItem 
                                label="Home"
                                icon={({color,size}) => (<CarRepairButtonIcon  color={color} size={size}/>)}
                                onPress={() => {navigation.navigate('home')}}
                            />
                            <DrawerItem 
                                label="Kabinetim"
                                icon={({color,size}) => (<CarRepairButtonIcon  color={color} size={size}/>)}
                                onPress={() => {navigation.navigate('kabinetim')}}
                            />
                            <DrawerItem 
                                label="Avto Servis"
                                icon={({color,size}) => (<CarServicesIcon color={color} size={size}/>)}
                                onPress={() => {navigation.navigate('android2')}}
                            />
                            <DrawerItem 
                                label="Usta"

                                icon={({color,size}) => (<UstaButtonIcon color={color} size={size}/>)}
                                onPress={() => {navigation.navigate('usta')}}
                            />
                            <DrawerItem 
                                label="Avto Mağaza"
                                icon={({color,size}) => (<ShopButtonIcon color={color}  size={size}/>)}
                                onPress={() => {navigation.navigate('shop')}}

                            
                            />
                        </Drawer.Section>

                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section >

            <TouchableRipple 
            onPress={() =>{props.logout()}}>
                <View style={styles.signOut}>
                    <SignOutIcon  width={24} height={24} />
                    <Text style={styles.signOutText}>Sign Out</Text>
                </View>
            </TouchableRipple>
            </Drawer.Section>
                    </SafeAreaView>
    )
    
}


export default drawerContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signOut : {
        marginBottom: 15,
        marginStart : 20,
        flexDirection: 'row',
        justifyContent : 'flex-start',
        alignItems: 'center',
    },
    signOutText : {
        marginStart : 10,
        fontSize : 18,
        fontFamily : "OpenSans-Regular"
    },
    content : {
        padding:20,
    },
    userInfo : {
        marginStart : 20,
        justifyContent : 'flex-start',
        alignItems: 'flex-start'
    },
    verifyButtonText : {
        color: colors.mainColor,
        textTransform: 'lowercase',
        color: colors.mainColor,
        textTransform: 'lowercase',
    },
    verifyButton : {
        alignSelf : 'flex-start',
        justifyContent : 'flex-start',
        
    },
})
