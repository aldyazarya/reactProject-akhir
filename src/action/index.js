import axios from '../config/axios'
import cookies from 'universal-cookie'
import swal from 'sweetalert';


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
                text: "Complete Your Profile",
                icon: "success",
                button: "OK",
              }).then (function(){
                  window.location = "/createprofile"
              })
        }).catch (e => {
            console.log(e);
            
        })
    }
}


export const saveProfile = (name, dateofbirth, gender, phonenumber, email, country, cityordistrict, postalcode, address) => {
    return dispatch => {
        axios.patch(`/profile/${cookie.get("masihLogin")}`, {
            // username: cookie.get('masihLogin'),
            name,
            dateofbirth,
            gender,
            phonenumber
        }).then (
            axios.patch(`/users/${cookie.get("masihLogin")}`,{
                email
            })
        ).then (
            axios.patch(`/address/${cookie.get("masihLogin")}`, {
                country, cityordistrict, postalcode, address
            })
        ). then (res => {
            if(name === '' || dateofbirth === '' || gender === '' || phonenumber === '' || email === ''){
				swal({text: "Please input all data!",
				icon: "warning",
				dangerMode: true})
			} else {
                swal({
                    title: "Your Profile Has Been Updated",
                    text: "",
                    icon: "success",
                    button: "OK",
                  }).then (function(){
                      window.location = "/profile"
                  })

                console.log("name :" + name,
                     "dateofbirth: " + dateofbirth,
                    "gender : " + gender,
                    "phonenumber :" + phonenumber);
                
            }
        })
    }
}

export const createProfile = (name, dateofbirth, gender, phonenumber) => {
    return dispatch => {
        axios.post('/profile/', {
            username: cookie.get("masihLogin"),
            name, dateofbirth, gender, phonenumber
        }).then ( res => {
            if(name === '' || dateofbirth === '' || gender === '' || phonenumber === '' ) {
                swal({text: "PLease input all data!",
                icon: "warning",
                dangerMode:true})
            } 
            else {
                swal({
                    title: "Your Profile Has Been Created",
                    text: "",
                    icon: "success",
                    button: "OK",
                  })
                //   .then (function(){
                //       window.location = "/"
                //   })
                
                console.log(
                    "name: " + name,
                    "dateofbirth: " + dateofbirth,
                    "gender : " + gender,
                    "phonenumber :" + phonenumber
                    
                );

                }
        })
    }
}
export const createAddress = (country, cityordistrict, postalcode, address) => {
    return dispatch => {
        axios.post('/address/', {
            username: cookie.get("masihLogin"),
            country, cityordistrict, postalcode, address
        }).then (res => {
            if( country === '' || cityordistrict === '' || postalcode === '' || address === '') {
                swal({text: "PLease input all data!",
                icon: "warning",
                dangerMode:true})
            } else {
                swal({
                    title: "Your Profile Has Been Created",
                    text: "",
                    icon: "success",
                    button: "OK",
                  }).then(function(){
                      window.location = "/profile"
                  })
                console.log(
                    "country :" + country,
                    "cityordistrict:" + cityordistrict,
                    "postalcode :" + postalcode,
                    "address :" + address 
                );
                
            }
        })
    }
}
// export const createAvatar = (filename) => {
//     return dispatch => {
//         axios.post('/upstore/', {
//             username: cookie.get("masihLogin"),
//             filename
//         }).then (res => {
//             if(filename === ''){
//                 swal({text: "Please input all data!",
//             icon: "warning",
//         dangerMode: true})
//             }
//         })
//     }
// }



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
