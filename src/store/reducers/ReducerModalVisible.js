
export const modalVisibleInitialValue = {modalVisible: false}


export const reducerModalVisible = (state,action) => {
    switch (action.type){
            case 'toggleModalVisible' :
                return {...state, modalVisible: !state.modalVisible}
            case 'setIsLoggoedIn' :
                return {...state, isLoggedIn: action.value}
    }
}