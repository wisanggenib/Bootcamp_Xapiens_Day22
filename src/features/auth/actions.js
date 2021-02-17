import { LOG_OUT, LOGIN, SET_LOADING } from './constants';
import { MyNavigate } from '../../helper/navigator';
import axios from "axios";
import { Alert } from 'react-native';


export const logOut = () => {
    return { type: LOG_OUT };
};

export const login = (data) => {
    return { type: LOGIN, payload: data }
};

export const setLoading = (data) => {
    return { type: SET_LOADING, payload: data }
}

export const doLogin = (inputUsername, inputPassword) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        //console.log('dispatch')
        axios
            .post('https://simple-wms.herokuapp.com/api/v1/auth/login', {
                data: {
                    username: inputUsername,
                    password: inputPassword
                }
            })
            .then((response) => {
                // const idTemp = response.data.data.id
                // const token = response.data.data.token
                Alert.alert('Sukses')
                dispatch({ type: LOGIN, payload: response.data.data });
            })
            .catch((error) => {
                Alert.alert('Username / Password Salah')
            })
            .finally(() => {
                dispatch(setLoading(false));
                console.log('done login')
            });
    };
};

export const doRegister = (inputFullname, inputUsername, inputPassword, inputPhone, inputEmail) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        //console.log('dispatch')
        axios
            .post('https://simple-wms.herokuapp.com/api/v1/auth/signup', {
                data: {
                    full_name: inputFullname,
                    username: inputUsername,
                    password: inputPassword,
                    phone_number: inputPhone,
                    email: inputEmail
                }
            })
            .then((response) => {
                // console.log(response)
                Alert.alert('Success')
                // dispatch({ type: LOGIN, payload: response.data.data });
                MyNavigate('Login');
            })
            .catch((error) => {
                console.log(error.response.data.message);
                Alert.alert(error.response.data.message)
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    };
};