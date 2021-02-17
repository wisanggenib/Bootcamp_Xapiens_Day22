import axios from "axios";
import { GET_POST } from "./constants";

export const getPost = () => {
    return { type: GET_POST, payload: '2' }
}

export const fetchPost = () => {
    return (dispatch) => {
        //   dispatch(setLoading(true));
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response.data);
                // dispatch({ type: SET_POST, value: response.data });
            })
            .catch((error) => {
                console.log({ error });
            })
            .finally(() => {
                //   dispatch(setLoading(false));
                console.log('done')
            });
    };
};