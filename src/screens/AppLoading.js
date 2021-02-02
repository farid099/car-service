import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import {colors,lang} from '../components/consts'

const AppLoading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color= {colors.LoadingIndicatorColor} />
            <Text style={styles.text} >{lang.loading}</Text> 
        </View>
    )
}

export default AppLoading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: 'center',
    },
    text : {
        marginTop: 10
    }
})
