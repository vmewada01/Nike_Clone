import * as types from "./actionType"

const getLogin=()=>(dispatch)=> {
     dispatch({type: types.GET_LOGIN_REQUEST})
     return axios.post("https://reqres.in/api/login").then((res)=> {
        dispatch({type: types.GET_LOGIN_SUCCESS})
     }).catch((err)=> {
        dispatch({type: types.GET_LOGIN_FAILURE})
     })
}


export {getLogin}