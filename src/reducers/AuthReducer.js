const init = {
    id: '',
    username: '',
    error: ''
}

export default (state = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, id: action.payload.id, username: action.payload.username}
        case "KEEP_LOGIN":
            return {...state, id: action.payload.id, username: action.payload.username,};
        case "LOGOUT":
            return state = init  
        case "ERROR_LOGIN":
            return{...state, error: action.payload.error} 
        default:
            return state
        }
}