import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BackButtonIcon from './icons/BackButtonIcon'


const backButton = () => {

    const navigation = useNavigation()


    return (
        <TouchableOpacity 
            onPress={() => {navigation.goBack()}}>
                <BackButtonIcon  />
        </TouchableOpacity>
    )
}

export default backButton

const styles = StyleSheet.create({})
