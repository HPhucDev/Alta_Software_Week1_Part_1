import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store';
const bankState = createSlice({
    name: 'bank',
    initialState: 0,
    reducers: {
        depositMoney(state, action:PayloadAction<number>){
            return state + action.payload;
        },
        withdrawMoney(state, action:PayloadAction<number>) {
            return state - action.payload;
        },
        bankrupt(state) {
            return 0;
        }
    }
})
const {actions,reducer}=bankState;
export const {depositMoney,withdrawMoney,bankrupt} = bankState.actions;
export default bankState.reducer;
export const bankStateCurrent = (state: RootState) => state.bank;