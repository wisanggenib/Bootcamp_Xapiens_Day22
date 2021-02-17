import { GET_POST } from "./constants";

const defaultState = {
    post: '1',
};

const reducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case GET_POST:
            return { ...state, post: actions.payload };

        default:
            return state;
            break;
    }
};

export default reducer