/*
 The modal menu component we use instead of the dropdown menu.
 It takes the variable named data of array type. Lists contents
*/
import React,{useState,useEffect} from 'react'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { StyleSheet, Text, View,Modal,TouchableOpacity,TextInput,FlatList,RefreshControl } from 'react-native'
import {colors} from './consts'
import {StoreContext} from '../store/Context'
import SearchIcon from './icons/SearchIcon'
import BackButtonIcon from './icons/BackButtonIcon'

const ModalMenu = (props) => {

    const {setModalSelectedItem,data} = props

    const {state,dispatch} = React.useContext(StoreContext)

    const [searchValue, setSearchValue] = useState("")

    const insets = useSafeAreaInsets()


    //The state that holds the elements to show in the menu
    const [listUsta, setListUsta] = useState(data)

    
    //menu items filter according to the character typed inside.
    function searchInArrayofHashes(array,key,keyword) {
        let responsearr = []
        for(let i=0;i<array.length;i++) {
            if(array[i][key].indexOf(keyword) > -1 ) {
                responsearr.push(array[i])
        }
        }
        return responsearr
    }


    //Updates menu items with every character typing
    useEffect(() => {
        setListUsta([])
        const tempData = (searchInArrayofHashes(data,"name",searchValue) )
        setListUsta(tempData)
    }, [searchValue])



    //Menu Items
    const Item = ({item}) => {
        return (
            <View style={styles.navBar}>
                <View style={{marginEnd : 3,}}>
                    <View style={styles.circle}>
                    </View>
                </View>

                <View style={{flex:5}}>
                    <Text style={styles.modalText}>{item.name}</Text>
                    <Text style={styles.modalTextSub}>{item.profession}</Text>
                </View>

            </View>
        )
    }

    const handleRenderItemPress = (item) => {
        setListUsta([])
        dispatch({type : "toggleModalVisible"})
        setModalSelectedItem(item)
    }
    
    //Flatlist method
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
            style={{ ...styles.openButtons}}
            onPress={() => { handleRenderItemPress(item)  }}>
                <Item item={item} />
        </TouchableOpacity>
        )
    }

    const renderSeparator = () => (
        <View style={styles.seperator}/>
    )
    
    const getItems = () => {
        return (
            <View style={styles.insideCard}>
                <View style = {styles.insideCardTitle} >
                    <SearchIcon />
                    <TextInput
                    value = {searchValue}
                    onChangeText = {(text) => setSearchValue(text)}
                    placeholder="Search"
                    style={styles.insideCardText} />
                </View>
                <View style = {styles.list} >
                    {
                            data && (
                                <FlatList
                                data={listUsta}
                                renderItem={renderItem}
                                ItemSeparatorComponent = {renderSeparator}
                                keyExtractor={(item, index) => index.toString()} /> 
                            )
                    }
                    
                </View>
            </View>
        )
    }
    

    const handleBackButtonPress = () => {
        setListUsta([])
        dispatch({type : "toggleModalVisible"})
    }


    const BackButton = () => {
      return (
        <TouchableOpacity
        onPress={() =>  { handleBackButtonPress() } }>
            <BackButtonIcon  />
        </TouchableOpacity>
      )
    }
    
    const handleShowModal = () => {
        setListUsta(data)
    }
    
    
    const getModal = () => {
        return (
        <Modal
        animationType="slide"
        transparent={true}
        cancelable = {true}
        visible={state.reducerOne.modalVisible === undefined ? false : state.reducerOne.modalVisible}
        onShow={handleShowModal}
        onRequestClose={() => { dispatch({type : 'toggleModalVisible'})} }
        >
            <View style = {{flex:1,backgroundColor:colors.bg}}> 
                <View  style={[styles.header,{marginTop:insets.top === 0 ? 20 : insets.top}]}  >
                        <BackButton />
                        <Text style={styles.headerTitle} >Tamir Haqqinda</Text>
                </View>
                <View
                style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {getItems()}
                    </View>
                </View>
            </View>
        </Modal>
        )
    }

    return (
        <View>
            {getModal()}
        </View>
    )
}

export default ModalMenu

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: colors.bg,
        padding: 20,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "stretch",
    },
    openButton: {
        borderRadius: 6,
        elevation: 2,
        marginTop : 3,
        justifyContent : "flex-start",
        alignItems: "stretch",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "left"
    },
    modalText: {
        fontFamily: "OpenSans-Regular",
        marginBottom: 5,
        fontSize: 12,
        textAlign: "left",
        fontWeight: "500",
    },
    modalTextSub: {
        fontFamily: "OpenSans-Regular",
        marginBottom: 5,
        fontSize: 10,
        textAlign: "left",
    },
    circle: {
        width: 39 ,
        height: 39,
        marginRight : 5,
        borderRadius: 200/2,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    rightIcon: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
    },
    insideCardTitle: {
        flexDirection: 'row',
        backgroundColor: colors.mainColor,
        height: 39,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal : 16,
        borderTopEndRadius : 6,
        borderTopStartRadius : 6 ,
    },
    insideCardText: {
        flex: 1,
        marginStart : 5,
    },
    insideCard: {
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius : 6,

    },
    list: {
        paddingHorizontal:14,
        paddingVertical:25,
    },
    seperator : {
        backgroundColor: colors.mainColor,
        height: 1,
        marginHorizontal : 7,
    },
    header: {
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginEnd: 19,
        marginStart : 19,
    },
    headerTitle: {
        zIndex: 1,
        elevation:1,
        color: colors.mainColor,
    }
})
