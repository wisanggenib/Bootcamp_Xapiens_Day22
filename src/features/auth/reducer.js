import { LOG_OUT, LOGIN } from './constants';

const defaultState = {
    isLogin: false,
    tempUser: null,
    user: [
        {
            "id": 1,
            "name": "rinrin",
            "email": "rin",
            "password": "rin"
        },
        {
            "id": 2,
            "name": "Testing",
            "email": "a@a.a",
            "password": "123456"
        },
    ],
};

const reducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case LOGIN:
            return { ...state, isLogin: true };
            break;
        case LOG_OUT:
            return { ...state, isLogin: false };
            break;

        default:
            return state;
            break;
    }
};

export default reducer;
