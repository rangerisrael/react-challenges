
import {configureStore} from '@reduxjs/toolkit'

import { combineReducers } from 'redux';

import {useSelector,useDispatch, TypedUseSelectorHook} from 'react-redux';

import {Persistor, persistReducer, persistStore} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import logger from 'redux-logger';
import todoSlice from './slicer/todo.slice';

//combine reducer 
const rootReducer = combineReducers({
  todos:todoSlice
});
//persistorkey
const persistorKey ={
  key:'redux-store',
  storage
}

//persistor reducer

const persistorReducer = persistReducer(persistorKey,rootReducer);

//store
const store = configureStore({
	reducer: persistorReducer,
  middleware:(getMiddleware) => getMiddleware({
    immutableCheck:false,
    serializableCheck:false
  }).concat(logger),
  devTools:process.env.NODE_ENV !== 'production'
});

// persiterGate
export const persistorGate:Persistor = persistStore(store);

// type of store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//hooks
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;