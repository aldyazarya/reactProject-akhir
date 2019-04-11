import {combineReducers} from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';

const init = {
    id : '',
    username: '',
    error: '',
    success: ''
}

const AuthReducer = (state = init, action) => {
    switch (action.type) {
        case 'BerhasilLogin':

            return {...state, id: action.payload.id, username: action.payload.username}

        case 'ERROR':
            return {...state, error: action.payload, success:''}
        


        case 'SUCCESS':

            return{...state, error: '', success: action.payload}
            
        case 'Logout_User':
            window.location.pathname="/"
            return(state=init)


        case "SET_TIMEOUT":
            return{...state, error: '', success: ''}
    
        default:
           return state
    }
}


export default combineReducers(
    {
        auth: AuthReducer
    }
)