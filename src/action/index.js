import axios from '../config/axios'
import cookies from 'universal-cookie'


const cookie = new cookies()


export const onLoginClick = (username, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/login', {username, password})
            console.log(res);
            
            cookie.set('masihLogin', res.data.username, {path:'/'})
            cookie.set('idLogin', res.data._id, {path:'/'})

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    id: res.data._id , username: res.data.username
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
    cookie.remove('idLogin')

     return {
         type: 'LOGOUT'
     }
}


export const keepLogin = (username, id) => {
    if (username === undefined || id === undefined) {
      return {
        type: "KEEP_LOGIN",
        payload: {
          id: "",
          username: "",
        
        }
      };
    }
  
    return {
      type: "KEEP_LOGIN",
      payload: {
        id,
        username,
       
      }
    };
  };
  