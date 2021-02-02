import {ADD_NOTE,DELETE_NOTE,GET_NOTES,UPDATE_NOTE,} from '../actionType'

export const notesInitialValue = [

]


export const reducerNotes = (state,action) => {

    switch (action.type){
            case ADD_NOTE :
                return [...state, action.payload]
            case DELETE_NOTE :
                return  state.filter(note => note.id !== action.payload) 
            case GET_NOTES :
                return state
            case UPDATE_NOTE :
                return  state.map(note => 
                    note.id === action.payload.id
                    ? action.payload
                    : note
                    ) 
    }
}