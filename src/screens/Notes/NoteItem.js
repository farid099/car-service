import 'react-native-gesture-handler'
import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Alert,Dimensions,Animated } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler';
import {colors} from '../../components/consts'
import ItemDetailIcon from '../../components/icons/ItemDetailIcon'
import {StoreContext} from '../../store/Context'
import {ADD_NOTE,DELETE_NOTE} from '../../store/actionType'
import { AntDesign as Icon } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';


const SCREEN_WIDTH = Dimensions.get('screen').width;


const NoteItem = ({item,index}) => {
    

    const {state,dispatch} = React.useContext(StoreContext)

    const navigation = useNavigation()

    

    const handlePress = (item) => {
        navigation.navigate('note_detail', {item : item} )
    }

    const handleLongPress = (item) => {
        requestPermissinForDeleteNote(item)
    }
    
    const requestPermissinForDeleteNote = (item) => {
        Alert.alert(
            'do you want to delete note',
            '',
            [
                {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel'
                },
                { text: 'OK', onPress: () => dispatch({type : DELETE_NOTE, payload:item.id}) }
            ],
            { cancelable: false }
        );
    }

    const Item = () => {
        return (

            <TouchableOpacity
            activeOpacity = {0.7}
            onLongPress = {() => handleLongPress(item)}
            onPress = {() => handlePress(item)}
            style = {[styles.rectangle,{backgroundColor:"white", flexDirection:"row"} ]}>
                <View style = {{flex:2,}} >
                    <Text style = {styles.name}>{item.title}</Text>
                </View> 
                <View style = {{flex:2,flexDirection:"row",alignItems:"center"}} >
                    <Text style = {styles.phone}  >{item.date}</Text>
                </View> 
                <View style = {{flex:1}}>
                    <View style={styles.info}>
                            <ItemDetailIcon />
                    </View>
                </View>  
            </TouchableOpacity>

        )
    }


    const handleEdit = () => {
        navigation.navigate('note_update',{values : item})
        closeRow()

    }
    const handleDelete = () => {
        requestPermissinForDeleteNote(item)
        closeRow()
    }
    



   const  _renderRightAction = (icon, color, backgroundColor, x, progress,handlePress) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0]
        })

        return (
            <Animated.View style={{flex: 1, transform: [{translateX: trans}] }}>
            <RectButton
            onPress = {() => handlePress()}
                style={[styles.rightAction, { backgroundColor: backgroundColor } ]}
            >
                <Icon name={icon} size={30} color={color} />
            </RectButton>
            </Animated.View>
        )

    }

    const _renderRightActions = progress => (
        <View style={{ width: 128, flexDirection: 'row' }}>
            {_renderRightAction('edit', '#ffffff', '#689f38', 64, progress,handleEdit)}
            {_renderRightAction('delete', '#ffffff', '#d50000', 0, progress,handleDelete)}
        </View>
    )
    
    let row = [];
    let prevOpenedRow;

    function closeRow() {
      
        prevOpenedRow = row[index];
        prevOpenedRow.close();

    }
    
    return (
        <Swipeable 
        ref={ref => row[index] = ref}
        friction = {2}
        renderRightActions={_renderRightActions}
        leftThreshold={80}
        rightThreshold={40}
        >
            <Item />
        </Swipeable>
    )
}

export default NoteItem

const styles = StyleSheet.create({

 
    title: {
        alignSelf : 'flex-end',
        fontFamily : "OpenSans-Regular",
        fontSize : 18,
        color : colors.mainColor,
        marginEnd:19,
    },
      rectangle: {
        flexDirection: 'row',
        width: SCREEN_WIDTH-40,
        height: 69,
        marginTop: 15,
        marginStart:20,
        marginEnd: 20,
        paddingHorizontal:14,
        paddingVertical:12,
        backgroundColor: colors.mainColor,
        borderRadius : 6,
        justifyContent : 'flex-start',
        alignItems : 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    info: {
        flex:1,
        justifyContent : 'center',
        alignItems: 'flex-end' ,
        fontFamily : "OpenSans-Regular",
        fontSize: 12,
        paddingLeft : 3,
    },
  
    name : {
        fontWeight: '500',
        fontFamily : "OpenSans-Regular",
        fontSize: 12,
    },
    phone: {
        fontWeight: '200',
        fontFamily : "OpenSans-Regular",
        fontSize: 10,
        marginStart : 7
    },
    flatList : {
        paddingBottom: 3,
        paddingTop:3,
    },

    circle: {
        width: 50 ,
        height: 50,
        marginRight : 5,
        borderRadius: 100/2,
        backgroundColor: colors.mainColor,
        marginEnd:23,
        marginBottom : 43,
        alignSelf : "flex-end",
        justifyContent: 'center',
        alignItems: 'center',
    },
 
    rightAction: {
        backgroundColor: 'red',
        height : 69,
        width: 69,
        marginTop:15,
        alignItems: 'center',
        justifyContent: 'center'
      }
})
