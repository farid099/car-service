import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, FlatList, TouchableOpacity,Alert, } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {colors} from '../../components/consts'
import DrawerButton from '../../components/drawerButton'
import NoteItem from './NoteItem'
import {StoreContext} from '../../store/Context'
import { FAB } from 'react-native-paper';

const index = () => {

    const {state,dispatch} = React.useContext(StoreContext)

    const navigation = useNavigation()

    const insets = useSafeAreaInsets()


        const addNote = () => {
            navigation.navigate('note_write',{item : null})
        }
        
        const AddButton = () => {
            return (
                <FAB
                style={styles.fab}
                color = "white"
                icon="plus"
                onPress={() => addNote()}
                />
            )
        }
    
 
    const renderItem = ( item,index ) => (
        <NoteItem item={item} index={index}/>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea} >
                <View style={[styles.row,{marginTop : insets.top == 0 ? 20 : 0}]} >
        
                    <DrawerButton />
                    <Text style={[styles.title]}>Notlarım</Text>
                </View>

                <FlatList
                        data={state.reducerNote}
                        renderItem={({item,index}) => renderItem(item,index)}
                        keyExtractor={item => item.id}
                    />
            <AddButton />

            </SafeAreaView>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },
    safeArea: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:19,
    },
    title: {
        alignSelf : 'flex-end',
        fontFamily : "OpenSans-Regular",
        fontSize : 18,
        color : colors.mainColor,
        marginEnd:19,
    },
    itemText: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      rectangle: {
        flexDirection: 'row',
        width: '90%',
        height: 69,
        marginLeft: 20,
        marginEnd: 20,
        marginTop: 15,
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
    branch: {
        fontWeight: '200',
        fontFamily : "OpenSans-Regular",
        fontSize: 10,
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
    fab: {
        position: 'absolute',
        margin: 24,
        right: 0,
        bottom: 0,
        backgroundColor: colors.mainColor,
      },
})
