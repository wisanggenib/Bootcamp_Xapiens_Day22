import { SET_LOADING, SET_USER } from "./constants";
import axios from "axios";

export const setUser = (data) => {
    return { type: SET_USER, payload: data }
};

export const setLoading = (data) => {
    return { type: SET_LOADING, payload: data }
}

export const fetchUser = () => {
    return (dispatch, getState) => {

        dispatch(setLoading(true));
        const TOKEN = getState().auth.token
        const ID = getState().auth.tempId

        axios
            .get(`https://simple-wms.herokuapp.com/api/v1/user/${ID}`, {
                headers: {
                    "Authorization": `bearer ${TOKEN}`
                }
            })
            .then((response) => {
                // console.log(response.data.data);
                dispatch({ type: SET_USER, payload: response.data.data });
            })
            .catch((error) => {
                console.log({ error });
            })
            .finally(() => {
                dispatch(setLoading(false));
                console.log('done')
            });
    };
};