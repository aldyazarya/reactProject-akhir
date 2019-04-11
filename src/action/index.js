import axios from 'axios'
import cookies from 'universal-cookie'


const cookie = new cookies()


export const onLogin = (email, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/login', {email, password})
            console.log(res);
            
            cookie.set('masihLogin', res.data.name, {path:'/'})
            cookie.set('idLogin', res.data._id, {path:'/'})

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    id: res.data._id , name: res.data.name
                }
            })
            
        } catch (e) {
            console.log(e);
            
        }
    }
}



export const onRegister = (username, email, password) => {
    return dispatch => {
        axios.post('/users', {
            username, email, password
        }). then (res => {
            console.log("Register Success");
        }).catch (e => {
            console.log(e);
            
        })
    }
}


export const onLogoutUser = () => {
    cookie.remove('masihLogin')
     return {
         type: 'Logout_User'
     }
}


export const keepLogin = (user) => {
    return dispatch => {
        axios.get('http://localhost:1996/users', {
            params: {
                username: user
            }
        })
            .then(res => {
                if(res.data.length > 0){
                    dispatch({
                        type: 'BerhasilLogin',
                        payload: {username: user}
                    })
                }
            })
    }
}