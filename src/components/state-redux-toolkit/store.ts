import { configureStore,Action } from "@reduxjs/toolkit"
import bankReducer from './bankState'
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
const rootReducer ={
    bank:bankReducer,
}
 const store = configureStore({
    reducer:rootReducer,
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
export default store;