import React, {useState,useEffect} from 'react'
import { StyleSheet, View, Dimensions,Platform,TouchableOpacity,Text } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../components/consts'
import HeaderBg from './HeaderBg'
import WorkerImage from './workerImage'
import AddButton from './addButton'
import FilterCard from './filterCard'
import CarList from './carList'
import SubInfo from './subInfo'
import ModalMenu from '../../components/ModalMenu'
import {StoreContext} from '../../store/Context'
import BackButton from '../../components/backButton'

const index = () => {

    const navigation = useNavigation()

    //used for space in paddy screens
    const insets = useSafeAreaInsets()

    //Used for modal menu control
    const [modalVisible, setModalVisible] = useState(false);
    const [modalSelectedItem, setModalSelectedItem] = useState("")
    
    const {state,dispatch} = React.useContext(StoreContext)

    //dummy data
    const categoryData = [
        {id:11, name:"Mansur Əlizadə", profession:"Slesar"},
        {id:12, name:"Rasim Hikmetov", profession:"Elektrik"},
        {id:13, name:"Rasim Hikmetov", profession:"Elektrik"},
        {id:14, name:"Rasim Hikmetov", profession:"Elektrik"},
        {id:15, name:"Rasim Hikmetov", profession:"Elektrik"},
    ]

    
    return (
        <View style={styles.container}>
            <ModalMenu 
                modalVisible={state.reducerOne.modalVisible}
                setModalVisible={setModalVisible}
                setModalSelectedItem={setModalSelectedItem}
                data={categoryData}/>
            <View style={[styles.topSpace,{height:insets.top == 0 ? 0 : insets.top}]}/>
            <View style={[styles.backButton,{top:insets.top == 0 ? 20 : insets.top}]}>
                <BackButton  />
            </View>
            <Text style={[styles.title,{top:insets.top == 0 ? 20 : insets.top}]} >Avtobil haqqinda</Text>

            <HeaderBg style={[styles.headerBg,{top:insets.top}]}/>
            <WorkerImage style={[styles.workerImage,{top:insets.top + 57,}]}/>
            <SubInfo />
            <AddButton style={{top:insets.top + 157}}/>
            <FilterCard 
                setModalVisible = {setModalVisible}
            />
            <CarList />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBg : {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        elevation: 0
    },
    workerImage : {
        position: 'absolute',
        left:(Dimensions.get('window').width - 326 ) / 2,
        top:57,
    },
    topSpace : {
        position: 'absolute',
        backgroundColor: colors.bg,
        top: 0,
        left: 0,
        width: '100%',
    },
    backButton: {
        position: 'absolute',
        left:20,
        elevation: 5,
        zIndex: 2,
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
        elevation: 1,
    }

})
