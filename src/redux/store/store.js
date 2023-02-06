import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducer';

import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);

//export const store = createStore(appReducer, {}, applyMiddleware(thunk));
