import { LOG_OUT, LOGIN, SET_LOADING } from './constants';

const defaultState = {
    isLogin: false,
    tempId: null,
    token: null,
    isLoading: false,
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
            // console.log('ini id', actions.payload.id)
            // console.log('ini token', actions.payload.token)
            return { ...state, isLogin: true, tempId: actions.payload.id, token: actions.payload.token };
            break;

        case LOG_OUT:
            // console.log('You Logged LOut')
            return { ...state, isLogin: false, tempId: null, token: null };
            break;

        case SET_LOADING:
            console.log("LOADING STATUS :", actions.payload)
            return { ...state, isLoading: actions.payload };

        default:
            return state;
            break;
    }
};

export default reducer;
