import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native'
import {colors,lang} from '../../components/consts'
import BackButtonIcon from '../../components/icons/BackButtonIcon'
import {StoreContext} from '../../store/Context'
import {ADD_NOTE,UPDATE_NOTE} from '../../store/actionType'
import { Button } from 'react-native-paper';

const NoteUpdate = ({navigation,route}) => {



    const {state,dispatch} = React.useContext(StoreContext)

    const [note, setNote]  = useState("");
    const [title, setTitle] = useState("")


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const {values} = route.params
            setNote(values.note)
            setTitle(values.title)
            // The screen is focused
            // Call any action
          });
      return () => {
        unsubscribe
      };
    }, [])



    const getCurrentDate = () => {

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        return date + '.' + month + '.' + year;
    }

 

    const doNotSaveNoteWarning = () => {
        Alert.alert(
            lang.dont_save,
            '',
            [
                {
                text: 'Cancel',
                onPress: () => ('Cancel Pressed'),
                style: 'cancel'
                },
                { text: 'OK', onPress: () => {
                    emptyNoteAndTitle()
                    goBack()
                } }
            ],
            { cancelable: false }
        );
    }
    
    const saveNote = () => {
        const {values} = route.params

        if(title?.length > 0 & note?.length > 0)  {
            dispatch({type : UPDATE_NOTE, payload : {
                    id: values.id,
                    title: title,
                    note: note,
                    date : getCurrentDate()
            } })
            emptyNoteAndTitle()
            goBack()
        } else {
            doNotSaveNoteWarning();
        }
    }
    
    const emptyNoteAndTitle = () => {
        setNote("")
        setTitle("")
    }
    
    
    const goBack = () => {
        navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'notes',
                    params: { someParam: 'Param1' },
                },
            ],
        })
    }
    
    //button in the upper left corner
    const BackButton = () => {
        return (
            <TouchableOpacity
            onPress = {() => saveNote()} 
            style={styles.backButton} >
                <BackButtonIcon  />
            </TouchableOpacity>
        )
    }

    const SaveButton = () => (
        <Button style={styles.saveButton} icon="content-save-outline" mode="contained" 
        onPress={() => saveNote()}>
            {lang.save}
        </Button>
      );

    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.row} >
                <BackButton />
                <Text style={[styles.title]}>Notlarım</Text>
            </View>

            <View style={styles.noteContent} >
                <TextInput
                    style={styles.baslik}
                    multiline
                    numberOfLines={14}
                    onChangeText={text => setTitle(text)}
                    value={title}
                    placeholder="Note Title"
                />
                <TextInput
                    style={{ height: 240, borderColor: 'gray', borderWidth: 1 }}
                    multiline
                    numberOfLines={14}
                    onChangeText={text => setNote(text)}
                    value={note}
                    placeholder = {"Note..."}
                />
                <SaveButton />
            </View>
        </SafeAreaView>
    </View>
    )
}

export default NoteUpdate

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
    },
    title: {
        alignSelf : 'flex-end',
        fontFamily : "OpenSans-Regular",
        fontSize : 18,
        color : colors.mainColor,
        marginEnd:19,
    },
    backButton: {
        marginLeft:20,
        marginTop : 10,
    },
    noteContent : {
        flex: 1,
        paddingTop:27,
        paddingStart:20,
        paddingEnd:20,
        backgroundColor : 'white',
        marginTop : 19,
        borderTopEndRadius : 6,
        borderTopLeftRadius : 6
    },
    baslik : {
        fontWeight : 'bold',
        fontFamily : "OpenSans-Regular",
        fontSize : 14,
        color : colors.mainColor,
        marginBottom : 13,

    },
    message : {
        marginTop :13,
        fontFamily : "OpenSans-Regular",
        fontSize : 12,
    },
    saveButton : {
        marginTop : 13,
        backgroundColor : colors.mainColor,
    }
    
})
