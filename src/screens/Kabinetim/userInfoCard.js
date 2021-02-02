import * as React from "react"
import { StyleSheet, Text, View,Dimensions,TouchableOpacity} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import NotePad from '../../components/icons/NotePadIcon'
import {colors} from '../../components/consts'
import {useNavigation} from '@react-navigation/native'

function UserInfoCard(props) {

    const navigation = useNavigation()

    const insets = useSafeAreaInsets()

    const NotePadIcon = (params) => {
        return (
            <TouchableOpacity 
            style={styles.notepadIcon}
            onPress={() => {navigation.navigate('notes')} }
            >
                <NotePad />
            </TouchableOpacity>
        )
    }
    
    return (
    <View style={[styles.container,{top:insets.top + 290} ]}>
        <NotePadIcon />
        <View style={styles.RectangleShapeView} >
            <Text style={styles.name}>{props.name} </Text>
            <Text style={styles.email}>{props.email} </Text>
        </View>
        
    </View>
)
}

export default UserInfoCard

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 200,
        left: (Dimensions.get('window').width - 328 ) / 2,
    },
    name: {
        fontSize: 13,
        paddingTop:10,
        paddingHorizontal : 10,
        alignSelf : 'center',
    },
    email: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 13,
        paddingTop:4,
        paddingHorizontal : 10,
        paddingBottom : 14,
        alignSelf : 'center',
    },
    RectangleShapeView: {
 
        marginTop: 8,
        width: 320,
        height: 72,
        borderRadius: 6,
        backgroundColor: colors.mainColor
       
    },
    notepadIcon: {
        alignSelf : 'flex-end',
    }

})
