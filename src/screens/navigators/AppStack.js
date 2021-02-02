import React from 'react'

import {createDrawerNavigator} from '@react-navigation/drawer'
import DrawerContent from '../../components/drawerContent'

import HomePage from '../HomePage'
import Kabinetim from '../Kabinetim'
import CarDetail from '../CarDetail'
import Android5 from '../android5'

import Usta from '../Usta'
import UstaProfile from '../Usta/UstaProfile'

import Notes from '../Notes'
import NoteDetail from '../Notes/NoteDetail'
import NoteWrite from '../Notes/NoteWrite'
import NoteUpdate from '../Notes/NoteUpdate'

import {StoreContext} from '../../store/Context'

const AppStack = () => {

    const {logout,user} = React.useContext(StoreContext)

    const DrawerNavigator = createDrawerNavigator();

    return (
        <DrawerNavigator.Navigator drawerContent={(props) => <DrawerContent {...props} logout={logout} user={user} /> }>
            <DrawerNavigator.Screen name="home" component={HomePage} />
            <DrawerNavigator.Screen name="kabinetim" component={Kabinetim} />
            <DrawerNavigator.Screen name="shop" component={Android5} />
            <DrawerNavigator.Screen name="car_detail" component={CarDetail} />
            <DrawerNavigator.Screen name="usta" component={Usta} />
            <DrawerNavigator.Screen name="usta_profile" component={UstaProfile} />
            <DrawerNavigator.Screen name="notes" component={Notes} />
            <DrawerNavigator.Screen name="note_detail" component={NoteDetail} />
            <DrawerNavigator.Screen name="note_write" component={NoteWrite} />
            <DrawerNavigator.Screen name="note_update" component={NoteUpdate} />
        </DrawerNavigator.Navigator>
    )
}

export default AppStack
