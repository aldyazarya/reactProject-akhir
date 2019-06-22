import axios from 'axios'
import cookies from 'universal-cookie'
// import swal from 'sweetalert';
import {API_URL} from '../API_URL/API_URL'
// import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'


const cookie = new cookies()

// const rapi = require('rajaapi')
// const api = new rapi ({token: '03WHB5GyusKN4eOgM4jnrT2IoCEJVHJiBSkpqK8HjyEYvMH4Ti'})



export const onLoginClick = (username, password) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${API_URL}/users/login`, {username, password})
            console.log(res);
            
            if(res.data.length !== 1) {
                return dispatch({
                    type: 'ERROR_LOGIN',
                    payload: {
                        error: Swal.fire({
                            title: "Your Account Not Verified!",
                            text: "Please check your email to verified your account",
                            icon: "warning",
                            button: "OK"
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
    return async dispatch => {
        try {
            const res2 = await axios.post(`${API_URL}/users`, {
                username, email, password
            })
            console.log(res2.data[0]);
            

            // try {
            //     const res = await axios.get(`${API_URL}/getalluser`)
            //     console.log(res);
            try {
                cookie.set('emailLogin', res2.data[0].email )
                cookie.set('usernameLogin', res2.data[0].username )
                cookie.set('idLogin', res2.data[0].id )
                


                        Swal.fire({
                            position: 'center',
                            type: 'success',
                            title: 'Your Account Has Been Created',
                            text: 'Complete Your Profile',
                            showConfirmButton: false,
                            // timer: 3000
                          }).then (
                              setTimeout(function(){
                                  window.location.replace('/createprofile')
                              }, 3000)
                          )
                
            } catch (e){
                console.log(e);
                
            }
                            
     
                
            // } catch(e) {
            //     console.log(e);
                
            // }
                
        } catch(e) {
            console.log(e);    
        }
        
    }
}



export const onCreateProfile = (name, dateofbirth, gender, phonenumber,country, cityordistrict, postalcode, address) => {
    return  async function () {
        try{
            const res2 = await axios.get(`${API_URL}/getlastuser`)
            console.log(res2.data[0].id);

            try{
                const formData = new FormData()

            // formData.append('username', cookie.get('masihLogin'))
            formData.append("name", name)
            formData.append("dateofbirth", dateofbirth)
            formData.append("gender", gender)
            formData.append("phonenumber", phonenumber)
            formData.append("country", country)
            formData.append("cityordistrict", cityordistrict)
            formData.append("postalcode", postalcode)
            formData.append("address", address)

            console.log(formData);
            
                const res = await axios.patch(`${API_URL}/createprofile/${res2.data[0].id}`, formData)
                console.log(res);
                


            } catch(e){
                console.log(e);
                
            }
        } catch (e) {
            console.log(e);
            
        }
        
        
            

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
