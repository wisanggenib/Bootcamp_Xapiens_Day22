import { LOG_OUT, LOGIN } from './constants';

export const logOut = () => {
    return { type: LOG_OUT };
};

export const login = () => {
    return { type: LOGIN }
};