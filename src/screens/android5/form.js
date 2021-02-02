import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Modal,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import EditText from './EditText'
import SubmitButton from './SubmitButton'
import ModalMenu from '../../components/ModalMenu'

import {StoreContext} from '../../store/Context'

const form = (props) => {

    //Data entry types
    const category = "Category"
    const master = "Master"
    const place = "Place"
    const km = "Km"
    const productCost = "Product Cost"
    const masterCost = "Master Cost"
    const calendar = "Calendar"
    const masterGrade = "Master Grade"
    const moreInfo = "More Info"

    //the state used to hold data entered
    const [categoryValue, setCategoryValue] = useState("")
    const [masterValue, setMasterValue] = useState("")
    const [placeValue, setPlaceValue] = useState("")
    const [kmValue, setKmValue] = useState("")
    const [productionCostValue, setProductionCostValue] = useState("")
    const [masterCostValue, setmasterCostValue] = useState("")
    const [calendarValue, setCalendarValue] = useState("")
    const [masterGradeValue, setmasterGradeValue] = useState("")
    const [moreInfoValue, setmoreInfoValue] = useState("")

    //state used for modal menu display control
    const {state,dispatch} = React.useContext(StoreContext)

    //state used to hold data selected by modal
    const [modalSelectedItem, setModalSelectedItem] = useState("")
    const [clickedItem, setClickedItem] = useState(category)

    //The state used for datetimepicker display control
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    //dummy data
    const categoryData = [
        {id:11, name:"category1"},
        {id:12, name:"category2"},
        {id:13, name:"category3"},
        {id:14, name:"category4"},
        {id:15, name:"category5"},
    ]
    const masterData = [
      {id : 11, name:"master1"},
      {id : 12, name:"master2"},
      {id : 13, name:"master3"},
      {id : 14, name:"master4"},
      {id : 15, name:"master5"},
    ]
    const placeData = [
        {id : 11, name:"place1"},
        {id : 12, name:"place2"},
        {id : 13, name:"place3"},
    ]
    const masterGradeData = [
        {id : 11, name:"masterGrade1"},
        {id : 12, name:"masterGrade2"},
        {id : 13, name:"masterGrade3"},
    ]

    //Used for data selection to be displayed in the modal menu
    const getData = (which) => {
        switch (which) {
            case category :
                return categoryData;
            case master :
                return masterData;
            case place :
                return placeData;
            case masterGrade :
                return masterGradeData;
        }
    }
    
    //updating the screen after selecting data in the modal menu
    useEffect(() => {
        const item = modalSelectedItem
        setValue(item.name,clickedItem)
    }, [modalSelectedItem])

  const setModalVisible = () => {
    dispatch({type : "toggleModalVisible"})
  }
  
    //Processing data entered with TextInput
    const onChangeText = (text,which) => {
        setClickedItem(which)
        switch (which) {
            case category : 
                setCategoryValue(text)
                setModalVisible()
                return
            case master : 
                setMasterValue(text)
                setModalVisible()
                return
            case place : 
                setPlaceValue(text)
                setModalVisible()
                return
            case km : 
                setKmValue(text)
                return
            case productCost :
                setProductionCostValue(text)
                return
            case masterCost :
                setmasterCostValue(text)
                return
            case calendar :
                setCalendarValue(calendar)
                showDatePicker()
                return
            case masterGrade :
                setmasterGradeValue(text)
                setModalVisible()
                return
            case moreInfo :
                setmoreInfoValue(text)
                return     
        }

    }

    //Processing data selected from the modal menu
    const setValue = (text,which) => {
        switch (which) {
            case category : 
                setCategoryValue(text)
                return
            case master : 
                setMasterValue(text)
                return
            case place : 
                setPlaceValue(text)
                return
            case km : 
                setKmValue(text)
                return
            case productCost :
                setProductionCostValue(text)
                return
            case masterCost :
                setmasterCostValue(text)
                return
            case calendar :
                setCalendarValue(calendar)
                return
            case masterGrade :
                setmasterGradeValue(text)
                return
            case moreInfo :
                setmoreInfoValue(text)
                return     
        }

    }
    
    //datetimepicker display methods
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setCalendarValue(date.toString());
        hideDatePicker();
    };


    return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
    >
        <View style={styles.root}>
            <ModalMenu 
                modalVisible={state.modalVisible}
                setModalSelectedItem = {setModalSelectedItem}
                data={getData(clickedItem)}
            />
            <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
            
            <EditText 
                placeHolder="Category"
                value = {categoryValue}
                onChangeText = {onChangeText}
                id={category}
                fullWidth
                icon
            />

            <EditText 
                placeHolder="Master"
                value = {masterValue}
                onChangeText = {onChangeText}
                id = {master}
                fullWidth
                icon
            />

            <EditText 
                placeHolder={place}
                value = {placeValue}
                onChangeText = {onChangeText}
                id = {place}
                fullWidth
                icon
            />
            <View style={styles.row}>
                <View style={{flex:1}}>
                <EditText 
                    placeHolder={km}
                    value = {kmValue}
                    onChangeText = {onChangeText}
                    id = {km}
                    row
                    numeric
                    editable
                    style={{paddingEnd:5}}
                />
                </View>
                <View style={{flex:1}}>
                <EditText 
                    placeHolder={productCost}
                    value = {productionCostValue}
                    onChangeText = {onChangeText}
                    id = {productCost}
                    row
                    numeric
                    editable
                    style={{paddingEnd:5,paddingStart:10}}
                />
                </View>
                <View style={{flex:1}}>
                <EditText 
                    placeHolder={masterCost}
                    value = {masterCostValue}
                    onChangeText = {onChangeText}
                    id = {masterCost}
                    row
                    numeric
                    editable
                    style={{paddingStart:10}}
                />
                </View>

            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <EditText 
                    placeHolder={calendar}
                    value = {calendarValue}
                    onChangeText = {onChangeText}
                    id = {calendar}
                    icon
                    row
                    style={{paddingEnd:10}}
                />
                </View>
                <View style={styles.column}>
                    <EditText 
                        placeHolder={masterGrade}
                        value = {masterGradeValue}
                        onChangeText = {onChangeText}
                        id = {masterGrade}
                        row
                        icon
                        style={{paddingStart:10}}
                    />
                </View>

            </View>
            <EditText 
                placeHolder={moreInfo}
                value = {moreInfoValue}
                onChangeText = {onChangeText}
                id = {moreInfo}
                fullWidth
                editable
            />
            <View>
                <SubmitButton />
            </View>
        </View>
        </KeyboardAvoidingView>
    ) 
}

export default form

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    root:{
        flex: 1,
        justifyContent : 'space-evenly',
    },
    row : {
        flexDirection : 'row',
    },
    column : {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 7,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 6,
        padding: 10,
        elevation: 2,
        marginTop : 3,
        paddingHorizontal : 19,
        justifyContent : "center",
        alignItems: "center",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
