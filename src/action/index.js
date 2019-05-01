import axios from '../config/axios'
import cookies from 'universal-cookie'
import swal from 'sweetalert';
import {Link} from 'react-router-dom'


const cookie = new cookies()

// const rapi = require('rajaapi')
// const api = new rapi ({token: '03WHB5GyusKN4eOgM4jnrT2IoCEJVHJiBSkpqK8HjyEYvMH4Ti'})


export const onLoginClick = (username, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/login', {username, password})
            console.log(res);
            
            if(res.data.length !== 1) {
                return dispatch({
                    type: 'ERROR_LOGIN',
                    payload: {
                        error: swal({
                            title: "Your Account Not Verified!",
                            text: "Please check your email to verified your account",
                            icon: "warning",
                            button: "OK",
                          })
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
            swal({
                title: "Your Account Has Been Created",
                text: "",
                icon: "success",
                button: "OK",
              }).then (function(){
                  window.location = "/login"
              })
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


  
//   api.rajaProvinsi()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(Error => {
//     console.log(Error)
//   })
