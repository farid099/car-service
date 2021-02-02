import React,{useState} from 'react'
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {colors,lang} from '../../components/consts'
import CategoryIcon from '../../components/icons/CategoryIcon'
import DownIcon from '../../components/icons/DownIcon'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {StoreContext} from '../../store/Context'


//component used for filtering
const filterCard = (props) => {

    const {setModalVisible} = props

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const insets = useSafeAreaInsets()

    const {state, dispatch}= React.useContext(StoreContext)

    const Category = () => {
        return (
            <TouchableOpacity
            activeOpacity = {0.6}
            style={styles.category}
            onPress = {() => {dispatch({type:"toggleModalVisible"})}}
            >
                <CategoryIcon />
                <Text style ={{marginLeft:3}} >{lang.category} </Text>
                <DownIcon />
            </TouchableOpacity>
        )
    }
    
    
    const Info = () => {
        return (
            <TouchableOpacity
            activeOpacity = {0.6}
            style={styles.info}>
                <CategoryIcon />
                <Text style ={{marginLeft:3}} >{lang.info} </Text>
                <DownIcon />
            </TouchableOpacity>
        )
    }
    
    

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    
    const Datee = () => {
        return (
            <TouchableOpacity
            activeOpacity = {0.6}
            onPress = {showDatePicker}
            style={styles.date}>
                <CategoryIcon />
                <Text style ={{marginLeft:3}} >{lang.date} </Text>
                <DownIcon />
            </TouchableOpacity>
        )
    }
    
 

    return (
                <View style={[styles.rectangle,{top:insets.top + 340}]}>
                    <Category />
                    <Datee />
                    <Info />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
    )
}

export default filterCard

const styles = StyleSheet.create({
    container: {
        top : 333,
    },
    rectangle: {
        flexDirection: 'row',
        width: '90%',
        height: 49,
        marginLeft: 20,
        marginEnd: 20,
        backgroundColor: colors.mainColor,
        borderRadius : 6,
        justifyContent : 'flex-start',
        alignItems : 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    category: {
        flex:1,
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems: 'center' ,
    },
    date: {
        flex:1,
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems: 'center' ,
    },
    info: {
        flex:1,
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems: 'center' ,
    }
})
