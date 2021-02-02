import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ItemDetailIcon from '../../components/icons/ItemDetailIcon'
import { useNavigation } from '@react-navigation/native';


const item = (props) => {

const navigation = useNavigation()

const handleOnPress = () => {
  navigation.navigate('car_detail')
}


    return (
        <TouchableOpacity
        onPress={handleOnPress}
        style={styles.item}>
            <View style={styles.row} >
                <Text style={styles.carName}>{props.carName}</Text>
                <ItemDetailIcon style={styles.detailIcon}/>
            </View>
            <Text style={styles.carDetail}>{props.carDetail}</Text>
        </TouchableOpacity>
    )
}

export default item

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'transparent',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    carName: {
        fontFamily : "OpenSans-Regular",
        fontSize: 12,
        flex : 4,
    },
    carDetail: {
        fontFamily : "OpenSans-Regular",
        fontSize: 10,
    },
    row : {
        flex: 1,
        flexDirection : 'row',
    },
    detailIcon : {
        flex : 1,
        alignSelf : 'flex-end',
    }
})
