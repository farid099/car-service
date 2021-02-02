import React,{useState} from 'react'
import { StyleSheet, Text, View,Modal,TouchableOpacity } from 'react-native'

const DetailMenu = (props) => {
    const {modalVisible, setModalVisible,data} = props;


    const modalHeader=(
        <View style={styles.modalHeader}>
            <Text style={styles.title}>Delete Your Account</Text>
            <View style={styles.divider}></View>
        </View>
    )

    const Item = (item) => {
        return (
            <TouchableOpacity
                onPress = {() => {
                    setModalVisible(false);
                }}
            >
                <Text style={styles.item}>{item.name }</Text>
            </TouchableOpacity>
        )
    }
    const modalBody=(
        <View style={styles.modalBody}>
            {
                data && (
                    data.map((item) => {
                        return (Item(item))
                })
                )
                
            }
            
        </View>
    )

    const modalFooter=(
        <View style={styles.modalFooter}>
            <View style={styles.divider}></View>
            <View style={{flexDirection:"row-reverse",margin:10}}>
            <TouchableOpacity style={{...styles.actions,backgroundColor:"#db2828"}} 
                onPress={() => {
                setModalVisible(false);
                }}>
                <Text style={styles.actionText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.actions,backgroundColor:"#21ba45"}}>
                <Text style={styles.actionText}>Yes</Text>
            </TouchableOpacity>
            </View>
        </View>
        )

    const modalContainer=(
        <View style={styles.modalContainer}>
            {modalHeader}
            {modalBody}
            {modalFooter}
        </View>
    )
    
    return (
        <Modal
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modal}>
        <View>
            {modalContainer}
        </View>
        </View>
    </Modal>
    )
}

export default DetailMenu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal:{
        backgroundColor:"#00000099",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer:{
        backgroundColor:"#f9fafb",
        width:"80%",
        borderRadius:5
    },
    modalHeader:{
        
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        padding:15,
        color:"#000"
    },
    divider:{
        width:"100%",
        height:1,
        backgroundColor:"lightgray"
    },
    modalBody:{
        backgroundColor:"#fff",
        paddingVertical:20,
        paddingHorizontal:10
    },
    modalFooter:{
    },
    actions:{
        borderRadius:5,
        marginHorizontal:10,
        paddingVertical:10,
        paddingHorizontal:20
    },
    actionText:{
        color:"#fff"
    },
    item:{
        fontSize:20,
        color:"#000",
    }
})
