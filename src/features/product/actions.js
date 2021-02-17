import axios from "axios";
import { SET_PRODUCT, SET_LOADING } from "./constants";

export const setProduct = (data) => {
    return { type: SET_PRODUCT, payload: data }
}

export const setLoading = (data) => {
    return { type: SET_LOADING, payload: data }
}

export const fetchProduct = (id) => {
    return (dispatch, getState) => {

        // console.log(getState().auth)
        const TOKEN = getState().auth.token
        dispatch(setLoading(true));
        // console.log('dispatch')
        axios
            .get(`https://simple-wms.herokuapp.com/api/v1/product`, {
                headers: {
                    "Authorization": `bearer ${TOKEN}`
                }
            })
            .then((response) => {
                // console.log(response.data.data);
                dispatch({ type: SET_PRODUCT, payload: response.data.data });
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