import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Dimensions,TouchableOpacity } from 'react-native'
import {colors} from '../../components/consts'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import DrawerButton from '../../components/drawerButton'
import UstaPageTopBg from './UstaProfileBg'
import ProfilePhoto from './profilFoto'
import GearIconUst from '../../components/icons/GearIcon'
import GearIconAlt from '../../components/icons/GearIconAlt'
import BackButtonIcon from '../../components/icons/BackButtonIcon'
import UstaName from './UstaProfileInfoComponent/UstaName'
import LocationName from './UstaProfileInfoComponent/LocationName'
import Phone from './UstaProfileInfoComponent/Phone'
import ServicedCar from './UstaProfileInfoComponent/ServicedCar'
import Map from './UstaProfileInfoComponent/Map'
const UstaProfile = ({navigation}) => {

    const insets = useSafeAreaInsets()

    const servicedCarList = [
        "Mercedes","Wolkswagen","Audi","Opel","Hyundai","Honda","Renault","BMW"
    ]

    const BackButton = () => {
        return (
            <TouchableOpacity 
            onPress={() => {navigation.goBack()}}
            style={styles.backButton} >
                <BackButtonIcon  />
            </TouchableOpacity>
        )
    }

    return (
        <View style = {styles.container}>
            <SafeAreaView style={styles.header} />
            <View style = {styles.top} >
                <View style={styles.topButton} >
                    <BackButton />
                    <Text style={styles.title} >Təmir haqqında</Text>
                </View>
                <GearIconUst style = {styles.gearIconUst} />
                <GearIconAlt style = {styles.gearIconAlt} />
                <ProfilePhoto  />
                <UstaName name = "Farid Babayev" profession="Elektrik"/>
                <LocationName name = "Bakı, Nərimanov ray, İbrahim Paşa Dadaşov küç, 154"/>
                <Phone phone = "050 700 22 73"/>
                <ServicedCar carList = {servicedCarList} />
                <Text style = {styles.destination}>See Destination</Text>
                <View style = {styles.rectangleShapeView}/>

            </View>
            <View style = {styles.bottom} >
                <Map LATITUDE={40.39072436482381} LONGITUDE={49.873379913690236} />
            </View>
        </View>
    )
}

export default UstaProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top : {
        flex : 2,
        flexDirection: 'column',
        backgroundColor:colors.bg,
    },
    bottom : {
        flex : 1,
        backgroundColor: "white",
    },
    header : {
        flex: 0,
        backgroundColor:colors.bg

    },
    topButton: {
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginEnd: 19,
    },
    HeaderBg:{
        position: 'absolute',
        top: 0,
        left: 0,
    },
    rectangleShapeView: {
        alignSelf: 'flex-end',
        width: "100%",
        height: 3,
        backgroundColor: colors.mainColor,
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
        top:0,
        left: 0,

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
    },
    gearIconUst : {
        position: 'absolute',
        top: 35,
        right: 0,
    },
    gearIconAlt : {
        position: 'absolute',
        top: 150,
        left: 0,
    },
    backButton: {
        marginLeft:20,
        marginTop : 20,
    },
    destination : {
        color : colors.mainColor,
        fontFamily : "OpenSans-Regular",
        marginEnd : 20,
        marginBottom : 5,
        alignSelf : 'flex-end',
    }
})
