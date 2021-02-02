import React from 'react'
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import {colors} from '../../components/consts'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Item from './item'
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        carName: 'Wolkswagen touareg',
        carDetail : 'touareg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        carName: 'Wolkswagen touareg',
        carDetail : 'touareg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-3145571e29d72',
        carName: 'Wolkswagen touareg',
        carDetail : 'touareg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e429d72',
        carName: 'Wolkswagen touareg',
        carDetail : 'touareg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e292d72',
        carName: 'Wolkswagen touareg',
        carDetail : 'touareg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d721',
        carName: 'Wolkswagen touareg',
        carDetail : 'touareg'
    },
];



const carList = () => {

    const renderSeparator = () => (
        <View style={styles.seperator}/>
    )

    const renderItem = ({ item }) => <Item carName={item.carName} carDetail={item.carDetail}/>;

    const insets = useSafeAreaInsets()

    return (
        <View style={[styles.container,{bottom:insets.bottom - 19, } ]}>
            <View style={[styles.rectangleShapeView,{height:insets.top + 375}]}>
            <View style={styles.flatList}>
                <FlatList
                    ItemSeparatorComponent={renderSeparator}
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
        flex: 1,
        position: 'absolute',
        bottom: 30,
        left: (Dimensions.get('window').width - 327 ) / 2,
    },
    rectangleShapeView: {
        marginTop: 20,
        width: 320,
        height: 375 ,
        borderRadius: 6,
        backgroundColor: "#fff",
    },

    flatList : {
        paddingBottom: 97,
        paddingTop:16,
    },
    seperator : {
        backgroundColor: colors.mainColor,
        height: 1,
        marginHorizontal : 35,
    }
})
