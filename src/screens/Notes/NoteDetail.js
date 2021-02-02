import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import {colors} from '../../components/consts'
import BackButtonIcon from '../../components/icons/BackButtonIcon'

const NoteDetail = ({navigation,route}) => {

    const {item} = route.params


    //button in the upper left corner
    const BackButton = () => {
        return (
            <TouchableOpacity
            onPress = {() => navigation.goBack()} 
            style={styles.backButton} >
                <BackButtonIcon  />
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.row} >
                <BackButton />
                <Text style={[styles.title]}>Notlarım</Text>
            </View>

            <View style={styles.noteContent} >
                <Text style={[styles.baslik]}>{item.title}</Text>
                <Text style={[styles.message]}>{item.note}</Text>
            </View>
        </SafeAreaView>
    </View>
    )
}

export default NoteDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },
    safeArea: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        alignSelf : 'flex-end',
        fontFamily : "OpenSans-Regular",
        fontSize : 18,
        color : colors.mainColor,
        marginEnd:19,
    },
    backButton: {
        marginLeft:20,
        marginTop : 10,
    },
    noteContent : {
        flex: 1,
        paddingTop:27,
        paddingStart:20,
        paddingEnd:20,
        backgroundColor : 'white',
        marginTop : 19,
        borderTopEndRadius : 6,
        borderTopLeftRadius : 6
    },
    baslik : {
        fontWeight : 'bold',
        fontFamily : "OpenSans-Regular",
        fontSize : 14,
        color : colors.mainColor,
    },
    message : {
        marginTop :13,
        fontFamily : "OpenSans-Regular",
        fontSize : 12,
    },
    
})
