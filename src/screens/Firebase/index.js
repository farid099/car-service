import firebase from 'firebase'
import 'firebase/firestore';

import {API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env"



export const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
  };



const Firebase =  !firebase.apps.length ? 
                                        firebase.initializeApp(config) 
                                        : 
                                        firebase.app()

// const saveToFireStore = (user) => {
//   const db = Firebase.firestore();
//   db.collection("users")
//     .doc(user.userID)
//     .set(user);
// }

// async function register(data) {
//   const {username,password,fullName,phoneNumber} = data
//   try {
//     await firebase.auth().createUserWithEmailAndPassword(username, password);
//     Firebase.auth()
//     .currentUser.getIdTokenResult()
//     .then(result => {
//         const tempUser = {
//             userID : result.claims.user_id,
//             userName: result.claims.email,
//             authTime : result.claims.auth_time,
//             emailVerified : result.claims.email_verified,
//             expTime : result.claims.exp,
//             fullName : fullName,
//             phoneNumber : phoneNumber,
//         }
//         saveToFireStore(tempUser);
//         return tempUser;
//     })
//     .catch(err => console.log(err) )
//   } catch (err) {
//     console.log("There is something wrong!!!!", err.message);
//   }

//   return null;
// }



export default Firebase