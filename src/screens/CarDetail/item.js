import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ItemDetailIcon from '../../components/icons/ItemDetailIcon'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const item = (props) => {

    const insets = useSafeAreaInsets()

   
    
    return (
            <View style={[styles.row,styles.rectangle]} >
                <View style={styles.category}>
                    <Text >{props.categoryName}</Text>
                </View>
                <View style={styles.date}>
                    <Text >{props.date}</Text>
                </View>
                
                <TouchableOpacity 
                style={styles.info}>
                    <ItemDetailIcon />
                </TouchableOpacity>
            </View>
    )
}

export default item

const styles = StyleSheet.create({
    row : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        marginBottom: 9
    },
    rectangle: {
        flex : 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        height: 65,
        marginLeft: 20,
        marginEnd: 20,
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
        justifyContent : 'center',
        alignItems: 'center' ,
        alignSelf : 'center',

        fontFamily : "OpenSans-Regular",
        fontSize: 12,
        paddingLeft : 3,
    },
    date: {
        flex:1,
        justifyContent : 'center',
        alignItems: 'center' ,
        fontFamily : "OpenSans-Regular",
        fontSize: 12,
        paddingLeft : 3,
    },
    info: {
        flex:1,
        justifyContent : 'center',
        alignItems: 'center' ,
        fontFamily : "OpenSans-Regular",
        fontSize: 12,
        paddingLeft : 3,
    }

})
