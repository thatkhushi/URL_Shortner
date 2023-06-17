import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async (dispatch) => {
  
    try {
        const { data } = await api.signUp(authData)
        alert(data);
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        alert(error?.response?.data?.message);
        console.log(error);
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    // console.log("hii");
    try {
        // console.log("hii1");

        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        // console.log("hii2");

        navigate('/')
    } catch (error) {
        alert(error?.response?.data?.message);
        console.log(error);
    }
}