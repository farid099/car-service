import React from 'react'
import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native'

const Loading = (props) => {

    const {visible } = props

    return (
        <Modal
        visible={visible}
        transparent={true} >
            <View style={styles.container}>
                <View style={styles.activityIndicatorWrapper} >
                    <ActivityIndicator 
                        animating={true}
                        size = 'large'
                        color = "#999999"
                    />
                </View>
                
            </View>
            
        </Modal>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})
