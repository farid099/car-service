import React,{useEffect,useContext} from 'react';
import { StyleSheet } from 'react-native';
import {StatusBar} from 'expo-status-bar'
import AppStack from './src/screens/navigators/AppStack'
import AuthStack from './src/screens/navigators/AuthStack'

import Firebase from './src/screens/Firebase'
import {StoreContext} from './src/store/Context'

export default function MainScreen() {

  const {user,setUser} = useContext(StoreContext)


  const setUserInfo = () => {

    Firebase.auth()
            .currentUser.getIdTokenResult()
            .then(result => {
                setUserDetailData(result)
            })
  }

  const  setUserDetailData = async (result) => {

    const db = Firebase.firestore()
    db
      .collection('users')
      .doc(result.claims.user_id)
      .get()
      .then(result => {
        console.log(result.data())
        setUser(result.data())
      })      
  }


  

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log("in")
          setUserInfo()
      } else {
        console.log("out")
        setUser(null)
      }
    });

    return subscriber;
  }, []);
  


  return (
          <>
            <StatusBar hidden={true}  />
            {user ? <AppStack /> : <AuthStack />}
          </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
