import { combineReducers,configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import gameReducer from './game';

const rootReducer = combineReducers({gameReducer: gameReducer});

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppState = ReturnType<typeof store.getState>
