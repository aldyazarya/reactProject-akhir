const init = {
    id: '',
    username: '',
    error: '',
    email: '',
    firstname: '',
    lastname: '',
    dateofbirth: '',
    gender: '',
    phonenumber: '',
    avatar: '',
    addressname: '',
    country: '',
    cityordistrict: '',
    postalcode: '',
    address:''
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
        case "PROFILE":
            return {...state, 
                id: action.payload.id, 
                username: action.payload.username,
                firstname: action.playload.firstname,
                lastname: action.payload.lastname,
                dateofbirth: action.payload.dateofbirth,
                gender: action.payload.gender,
                phonenumber: action.payload.phonenumber,
                avatar: action.payload.avatar,
                addressname: action.payload.addressname,
                address: action.payload.address,
                country: action.payload.country,
                cityordistrict: action.payload.cityordistrict,
                postalcode: action.payload.postalcode
                }

        default:
            return state
        }
}
