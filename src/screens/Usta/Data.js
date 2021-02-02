import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native'
import {colors} from '../../components/consts'
import SearchIcon from '../../components/icons/SearchIcon'
import DownIcon from '../../components/icons/DownIcon'
import ItemDetailIcon from '../../components/icons/ItemDetailIcon'
import PhoneIcon from '../../components/icons/PhoneIcon'
import {useNavigation} from '@react-navigation/native'

const Data = () => {

    const navigation = useNavigation();

const dummyData = [
    {id: 1, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 2, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 3, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 4, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 5, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 6, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 7, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 8, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 99, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 100, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
    {id: 111, name: "Farid Babayev",branch: "electric", phone: "050 770 22 44"},
]

const KateGoriButton = () => {
    return (
        <TouchableOpacity style = {styles.kategoriButton}>
            <Text style = {styles.buttonText}>Kateqoriya</Text>
            <DownIcon />
        </TouchableOpacity>
    )
}

const handleUstaPress = () => {
    navigation.navigate("usta_profile")
}

const UstaItem = ({item}) => {
    
    return (
        <TouchableOpacity
        activeOpacity = {0.6}
        onPress = {() => handleUstaPress()}
        style = {[styles.rectangle,{backgroundColor:"white", flexDirection:"row"} ]}>
            <View style = {{flex:2,}} >
                <Text style = {styles.name}>{item.name}</Text>
                <Text style = {styles.branch}>{item.branch}</Text>
            </View> 
            <View style = {{flex:2,flexDirection:"row",alignItems:"center"}} >
                <PhoneIcon />
                <Text style = {styles.phone}  >{item.phone} </Text>
            </View> 
            <View style = {{flex:1}}>
                <TouchableOpacity style={styles.info}>
                        <ItemDetailIcon />
                </TouchableOpacity>
            </View>  
        </TouchableOpacity>
    )
}

const renderItem = ({ item }) => {
    return (
        <UstaItem  item = {item} />
    )
}

    return (
        <>
            <KateGoriButton />
            <View style={styles.rectangle}>
                <SearchIcon />
                <Text style={styles.title}>Farid Babayev</Text>
            </View>

            <View style={styles.flatList}>
                <FlatList
                    data={dummyData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} />
            </View>

        </>
        
    )
}

export default Data

const styles = StyleSheet.create({
    container: {

    },
    rectangle: {
        flexDirection: 'row',
        width: '90%',
        height: 49,
        marginLeft: 20,
        marginEnd: 20,
        marginTop: 15,
        paddingHorizontal:14,
        paddingVertical:12,
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
    title : {
        marginStart: 10,
        fontWeight: '500',
        fontSize: 12,
        fontFamily: "OpenSans-Regular",
    },
    kategoriButton : {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginEnd : 23,
    },
    buttonText: {
        fontWeight: '500',
        fontFamily : "OpenSans-Regular",
        fontSize: 12,
        alignItems: 'center',
        marginEnd : 10,
    },
    info: {
        flex:1,
        justifyContent : 'center',
        alignItems: 'flex-end' ,
        fontFamily : "OpenSans-Regular",
        fontSize: 12,
        paddingLeft : 3,
    },
    branch: {
        fontWeight: '200',
        fontFamily : "OpenSans-Regular",
        fontSize: 10,
    },
    name : {
        fontWeight: '500',
        fontFamily : "OpenSans-Regular",
        fontSize: 12,
    },
    phone: {
        fontWeight: '200',
        fontFamily : "OpenSans-Regular",
        fontSize: 10,
        marginStart : 7
    },
    flatList : {
        paddingBottom: 3,
        paddingTop:3,
    },
    seperator : {
        backgroundColor: colors.mainColor,
        height: 1,
    }
})
