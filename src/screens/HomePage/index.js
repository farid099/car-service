import React from 'react';
import { View,StyleSheet,Dimensions,SafeAreaView,Text } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import Buttons from './Buttons';
import HeaderBg from './HeaderBg'
import WorkerImage from './workerImage'
import DrawerButton from '../../components/drawerButton'
import {colors} from '../../components/consts'
import {StoreContext} from '../../store/Context'


const index = ({navigation}) => {

    const {user} = React.useContext(StoreContext)

    //çeltikli telefonlardaki boşluğu hesaba katmak için kullanılıyor
    const insets = useSafeAreaInsets()
    
    
    return (
        <View style={styles.container}>
            <>
            <SafeAreaView style={[styles.header,{height:50}]} />
                <View style={[styles.drawerMenu,{top:insets.top == 0 ? 19 : insets.top}]} >
                        <DrawerButton  />
                </View>
                <Text style={[styles.title,{top:insets.top == 0 ? 13 : insets.top}]}>Ana səhifə</Text>

                <HeaderBg style={styles.headerBg}/>
                <WorkerImage style={[styles.workerImage,{top:insets.top == 0 ? 59 : insets.top+19}]}/>
            </>
            <Buttons  />
    
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
        zIndex :0,
        elevation : 0
    },
    workerImage : {
        position: 'absolute',
        left:(Dimensions.get('window').width - 349 ) / 2,
        top:47,
    },
    buttons : {
        marginTop: 39,
        marginLeft : 40,
    },
    drawerMenu : {
        position: 'absolute',
        top: 19,
        left: 19,
        zIndex: 9,
        elevation :9,

    },
    drawerButton : {
        flexDirection: 'row',
        position: 'absolute',
        zIndex : 9,
        top:19,
        left: 9,
        zIndex : 2,
        elevation : 3,
    },
    title : {
        alignSelf : 'flex-end',
        fontFamily : "OpenSans-Regular",
        fontSize : 18,
        color : colors.mainColor,
        position: 'absolute',
        top:5,
        right: 19,
        zIndex : 2,
        elevation : 2,
    },
    header : {
        flex: 0,
        backgroundColor:colors.bg
    },
})