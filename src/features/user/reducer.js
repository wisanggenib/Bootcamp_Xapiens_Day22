import { SET_LOADING, SET_USER } from "./constants";

const defaultState = {
    isLoading: true,
    tempUser: null,
}

const reducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case SET_USER:
            console.log(actions.payload)
            return { ...state, tempUser: actions.payload };
            break;

        case SET_LOADING:
            return { ...state, isLoading: actions.payload };

        default:
            return state;
            break;
    }
};

export default reducer;