import { SET_LOADING, SET_PRODUCT } from "./constants";

const defaultState = {
    product: null,
    isLoading: true,
    totalPages: null,
    totalItems: null,
};

const reducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case SET_PRODUCT:
            return { ...state, product: actions.payload.data, totalPages: actions.payload.totalPages, totalItems: actions.payload.totalItems };

        case SET_LOADING:
            console.log("LOADING STATUS :", actions.payload)
            return { ...state, isLoading: actions.payload };

        default:
            return state;
            break;
    }
};

export default reducer