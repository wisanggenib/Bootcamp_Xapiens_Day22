import { GET_POST, SET_POST, SET_LOADING } from "./constants";

const defaultState = {
    post: '1',
    posts: null,
    isLoading: true,
};

const reducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case GET_POST:
            return { ...state, post: actions.payload };

        case SET_POST:
            return { ...state, posts: actions.payload };

        case SET_LOADING:
            console.log("LOADING STATUS :", actions.payload)
            return { ...state, isLoading: actions.payload };

        default:
            return state;
            break;
    }
};

export default reducer