import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import {colors} from '../../components/consts'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Item from './item'

//dummy data
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        categoryName: 'Electric',
        date : '12.09.2020'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        categoryName: 'Motor',
        date : '12.09.2020'
    },
    {
        id: '58694a0f-3da1-471f-bd96-3145571e29d72',
        categoryName: 'Motor',
        date : '12.09.2020'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e429d72',
        categoryName: 'Electric',
        date : '12.09.2020'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e292d72',
        categoryName: 'Motor',
        date : '12.09.2020'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d721',
        categoryName: 'Motor',
        date : '12.09.2020'
    },
];

//
const carList = (props) => {


    const renderItem = ({ item }) => {
        return (
            <Item categoryName={item.categoryName} date={item.date}/>
        )
    }

    
    const insets = useSafeAreaInsets()

    return (
        <View { ...props} style={[styles.container,{top : insets.top+357}]} >
            <View style={[{height:insets.top + 375}]}>
            <View style={styles.flatList}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} />
            </View>
            </View>
        </View>
    )
}

export default carList

const styles = StyleSheet.create({
    container: {
        top : 357,
    },
    rectangleShapeView: {
        marginTop: 20,
        width: 320,
        height: 375 ,
        borderRadius: 6,
        backgroundColor: "#fff",
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
