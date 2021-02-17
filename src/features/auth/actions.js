import { LOG_OUT, LOGIN, SET_LOADING } from './constants';
import axios from "axios";


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
                dispatch({ type: LOGIN, payload: response.data.data });
            })
            .catch((error) => {
                console.log({ error });
            })
            .finally(() => {
                dispatch(setLoading(false));
                console.log('done login')
            });
    };
};