// state manager

import React,{useReducer,useState} from 'react'
import combineReducers from 'react-combine-reducers';
import {reducerModalVisible,modalVisibleInitialValue} from './reducers/ReducerModalVisible'
import {reducerNotes,notesInitialValue} from './reducers/ReducerNotes'

import Firebase from '../screens/Firebase'


const [rootReducerCombined,initialStateCombined] = combineReducers({
    reducerOne : [reducerModalVisible,modalVisibleInitialValue],
    reducerNote : [reducerNotes,notesInitialValue],
})

const StoreContext = React.createContext(initialStateCombined)

const StoreProvider = (props) => {
    
    const [state, dispatch] = useReducer(rootReducerCombined, initialStateCombined)

    const  [user, setUser] = useState(null)

    return (
        <StoreContext.Provider value={{
            state,
            dispatch,
            user,
            setUser,
            logout : async () => {
                try {
                    await Firebase.auth().signOut()
                } catch (error) {
                    
                }
            },
            }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export {StoreProvider,StoreContext}
