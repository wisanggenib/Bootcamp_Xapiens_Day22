import axios from "axios";
import { SET_PRODUCT, SET_LOADING, SET_DETAIL } from "./constants";
import { MyNavigate } from '../../helper/navigator';


export const setProduct = (data) => {
    return { type: SET_PRODUCT, payload: data }
}

export const setDetail = (data) => {
    return { type: SET_DETAIL, payload: data }
}

export const setLoading = (data) => {
    return { type: SET_LOADING, payload: data }
}

export const fetchProduct = () => {
    return (dispatch, getState) => {

        MyNavigate('Product');
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

export const fetchDetail = (id) => {
    return (dispatch, getState) => {
        MyNavigate('Detail');
        const TOKEN = getState().auth.token
        dispatch(setLoading(true));
        axios
            .get(`https://simple-wms.herokuapp.com/api/v1/product/${id}`, {
                headers: {
                    "Authorization": `bearer ${TOKEN}`
                }
            })
            .then((response) => {
                // console.log(response.data.data);
                dispatch({ type: SET_DETAIL, payload: response.data.data });
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