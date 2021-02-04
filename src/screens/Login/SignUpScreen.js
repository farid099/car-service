import React,{useState,useEffect} from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import {colors,lang} from '../../components/consts'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import {FontAwesome} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'

import Loading from '../../components/Loading';

import {StoreContext} from '../../store/Context'

import Firebase from '../Firebase'

const SignUpScreen = ({navigation}) => {


    const {setUser} = React.useContext(StoreContext)

    //loading screen control
    const [loadingVisible, setLoadingVisible] = useState(false)

    const [data, setData] = React.useState({
        fullName: '',
        phoneNumber: '',
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

   
    //State that checks for password errors
    const [passwordEqual, setPasswordEqual] = useState(true)

    const [passwordLengthError, setpasswordLengthError] = useState(false)

    const checkPasswordLength = () => {
       
        if((data.password === data.confirm_password) )
                setpasswordLengthError(false)


        if((data.confirm_password.length === 0) || (data.password.length === 0) )
            setpasswordLengthError(false)
        
    }
    
    useEffect(() => {
        setPasswordEqual(true)
        checkPasswordLength()
    }, [data.confirm_password,data.password])
    

    const handleFullNameChange = (val) => {
        setData({
            ...data,
            fullName: val
        });
    }


    
    const handlePhoneNumberChange = (val) => {
        setData({
            ...data,
            phoneNumber: val
        });
    }

    const warnUser = (message) =>{
            Alert.alert(
                "Signup Failed",
                message,
                [
                { text: "OK",onPress: () => setLoadingVisible(false)}
                ],
                { cancelable: false }
        );
    }

    

    const handleError = (error) => {
        //setLoadingVisible(false)

        switch(error.code) {
            case 'auth/email-already-in-use':
                warnUser('Email already in use !')
                break;
            case 'auth/invalid-display-name':
                warnUser('Username Incorrect !')
                break;
            default:
                warnUser(error.message)
        }
    }
    

    const saveToFireStore = (user) => {
        const db = Firebase.firestore();
        db.collection("users")
            .doc(user.userID)
            .set(user)
            .then(() => {
                //setLoadingVisible(false)
            }).catch(err => {
                //setLoadingVisible(false)
            })
    }
    
    async function register(data) {
        const {username,password,fullName,phoneNumber} = data
        try {
            await Firebase.auth().createUserWithEmailAndPassword(username, password);

            Firebase.auth()
            .currentUser.getIdTokenResult()
            .then(result => {
                const tempUser = {
                    userID : result.claims.user_id,
                    userName: result.claims.email,
                    authTime : result.claims.auth_time,
                    emailVerified : result.claims.email_verified,
                    expTime : result.claims.exp,
                    fullName : fullName,
                    phoneNumber : phoneNumber,
                }
                saveToFireStore(tempUser);
                return tempUser;
            })
            .catch(err => {} )
        } catch (err) {
            handleError(err);

        }
    }
    

    const signUp = () => {
        setLoadingVisible(true)
        register(data)
        .then(result => {
            if(result === undefined){
                
            }
        })
        .catch(err => {
            setLoadingVisible(false)
        })
    }
    
    const handleSignUp = () => {
        checkPasswordLength()
        if((data.password === data.confirm_password)) {
            if((data.password.length < 6 ) ||  (data.confirm_password.length < 6 )) 
                setpasswordLengthError(true)
            else
                signUp()
        }else{
            setPasswordEqual(false)
        }
        
    }

    const validateIsEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text)   
    }

    const handleEmailChange = (val) => {
        const checkMail = validateIsEmail(val)
        if( checkMail === true ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }


    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }


    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }






    return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Loading visible={loadingVisible} />
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView  >
            <Text style={styles.text_footer}>Full Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Full Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleFullNameChange(val)}
                />
                {data.fullName?.length > 0 ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="gray"
                        size={20}
                    />
                </Animatable.View>
                }
            </View>



            <Text style={[styles.text_footer, { marginTop: 15 }]}>Phone Number</Text>
            <View style={styles.action}>
                <Feather 
                    name="phone"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Phone Number"
                    keyboardType = "phone-pad"
                    textContentType = "telephoneNumber"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePhoneNumberChange(val)}
                />
                {data.phoneNumber.length > 0 ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="gray"
                        size={20}
                    />
                </Animatable.View>
                }
            </View>


            <Text style={[styles.text_footer, { marginTop: 15 }]}>E-mail</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your E-mail"
                    keyboardType = "email-address"
                    textContentType = "emailAddress"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleEmailChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="gray"
                        size={20}
                    />
                </Animatable.View>
                }
            </View>

            <Text style={[styles.text_footer, { marginTop: 15 }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20} 
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    autoCompleteType = "password"
                    textContentType = "none"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { passwordEqual === true ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{lang.passwordShouldBeSameText}</Text>
                </Animatable.View>
            }
            { passwordLengthError === true ?  
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{lang.passwordLengthErrorText}</Text>
                </Animatable.View>
                : null
            }
            <Text style={[styles.text_footer, {marginTop: 15 }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    autoCompleteType = "password"
                    textContentType = "none"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.confirm_secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { passwordEqual === true ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{lang.passwordShouldBeSameText}</Text>
                </Animatable.View>
            }
            { passwordLengthError === true ?
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{lang.passwordLengthErrorText}</Text>
                </Animatable.View>
                : null
            }
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>

                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {handleSignUp()}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >

                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </KeyboardAvoidingView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        alignItems : 'center',
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
  });