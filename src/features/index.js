import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage';
import thunkMiddleware from 'redux-thunk';


import authReducer from './auth/reducer';
import postReducer from './posts/reducer';

// import loginMiddleware from '../helper/login';

// const logger = (state) => (next) => (action) => {
//   console.log(`Memanggil ${action.type}`);
//   return next(action);
// };

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))
export const persistor = persistStore(store)

