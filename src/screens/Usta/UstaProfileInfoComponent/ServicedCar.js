import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../../../components/consts'

const Bullet = (text) => {
return(
    <View style={ styles.row }>
    <View style={ styles.bullet }>
        <Text style = {styles.bulletText}>{'\u2022' + " "}</Text>
    </View>
    <View >
        <Text style={styles.text} >{text}</Text>
    </View>
    </View>
);
}

const ServicedCar = (props) => {
    return (
        <View style={styles.container}>
            <Text style = {styles.header}>Xidmət göstərdiyi avtomobillər </Text>
            <View style ={{flexDirection: 'row'}}>
                <View style = { styles.cars}>
                    {
                        props.carList.slice(0,5).map((element) => {
                            return (
                                Bullet(element)
                            )
                        })
                    }
                </View>
                <View style =  {[styles.cars,{marginStart:27}]}>  
                    {
                        props.carList.slice(5,10).map((element) => {
                            return (
                                Bullet(element)
                            )
                        })
                    }
                </View>
            </View>

        </View>
    )
}

export default ServicedCar

const styles = StyleSheet.create({
 
    container: {
        position: 'absolute',
        left: 14,
        top: 310,
        flexDirection : 'column',
        alignItems : 'flex-start',
    },
    text: {
        color: "white",
        fontWeight : '500',
        fontSize : 10,
        fontFamily: "OpenSans-Regular",
    },
    header: {
        fontFamily: "OpenSans-Regular",
        color: colors.mainColor,
        fontWeight : '500',
        fontSize : 13,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex: 1,
        marginVertical: 4
    },
    bullet: {
        width: 10,
        fontSize: 19,
    },
  
    bulletText : {
        fontSize: 13,
        color: colors.mainColor,
    },
    cars: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})
