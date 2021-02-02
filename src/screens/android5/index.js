import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import {colors,lang} from '../../components/consts'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Form from './form'
import BackButton from '../../components/backButton'

const index = () => {

    const insets = useSafeAreaInsets()

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header,{marginTop: insets.top == 0 ? 20 : 0} ]} >
                <BackButton />
                <Text style={styles.title} >Təmir haqqında</Text>
            </View>

            <View style = {styles.rectangleShapeView} >
                <View style = {{flex:1}}>
                    <Form />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },
    rectangleShapeView: {
        flex: 1,
        marginTop: 55,
        marginRight:20,
        marginLeft:20,
        marginBottom : -6,
        borderRadius: 6,
        backgroundColor: '#fff',
        },
    backButton: {
        marginLeft:20,
        marginTop : 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginEnd: 19,
        marginStart : 19,
        marginTop:20
    },
    title : {
        alignSelf : 'flex-end',
        fontFamily : "OpenSans-Regular",
        fontSize : 18,
        color : colors.mainColor,
    }
})
