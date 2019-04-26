import axios from '../config/axios'
import cookies from 'universal-cookie'


const cookie = new cookies()


export const onLoginClick = (username, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/login', {username, password})
            console.log(res);
            
            if(res.data.length !== 1) {
                return dispatch({
                    type: 'ERROR_LOGIN',
                    payload: {
                        error: res.data
                    }
                })
            }
            
            cookie.set('masihLogin', res.data[0].username, {path:'/'})
            cookie.set('idLogin', res.data[0].id, {path:'/'})

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    id: res.data[0].id , username: res.data[0].username
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
 export const SaveProfile = (firstname, lastname, dateOfBirth, gender, email, phoneNumber, addressName, country, cityordistrict, postalCode, Address) => {
     return dispatch => {
         axios.post('/users', {
            firstname, lastname, dateOfBirth, gender, email, phoneNumber, addressName, country, cityordistrict, postalCode, Address
         }).then (res => {
             console.log("Save Profile Success");   
         }). catch ( e => {
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
  