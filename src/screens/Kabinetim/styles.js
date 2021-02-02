import {StyleSheet,Dimensions} from 'react-native'


import { colors } from '../../components/consts'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.bg,
        elevation : 0,
    },
    gearIconUst : {
        position: 'absolute',
        top:55,
        right: 0,
    },
    gearIconAlt : {
        position: 'absolute',
        top: 115,
        left: 0,
    },
    title : {
        alignSelf : 'flex-end',
        fontFamily : "OpenSans-Regular",
        fontSize : 18,
        color : colors.mainColor,
        position: 'absolute',
        top:5,
        right: 19,
        zIndex : 9,
    },
    drawerMenu : {
        position: 'absolute',
        top: 19,
        left: 19,
        zIndex: 9,
    }

})

export default styles