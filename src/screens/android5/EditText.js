import React from 'react'
import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard, Pressable } from 'react-native'

import {colors,lang} from '../../components/consts'
import DownIcon from '../../components/icons/DownIcon'

//common TextInput on form
const EditText = (props) => {


    const {style,row,icon} = props;


    return (

        <Pressable onPress={() => {
            props.onChangeText(props.id,props.id)
            Keyboard.dismiss}} >

        <View {...props} style={[styles.container,row ? style : null]} pointerEvents=  {props.editable ? 'auto' : 'none'} >
                <TextInput
                    placeholder = {props.placeHolder}
                    value = {props.value}
                    keyboardType = {props.numeric ? "numeric" : "default"}
                    editable = {props.editable ? true : false}  
                    returnKeyType='done'
                    onChangeText = {(text) => props.onChangeText(text,props.id)}
                    onFocus = {() => {
                        props.onChangeText("",props.id)
                    }}
                    style={[styles.textInput]}
                />
                <View style={styles.icon}>

                {icon ? <DownIcon/> : null  } 
                </View>
        </View>
        </Pressable>
    )
}

export default EditText

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingStart: 33,
        paddingEnd : 27,
        paddingVertical: 20,
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    textInput : {
        flex : 1,
        borderBottomWidth : 1,
        borderBottomColor : colors.mainColor,
        fontSize : 15,
        fontFamily : 'OpenSans-Regular',
    },
    icon : {
        position : 'absolute',
        right : 33,
    }
})