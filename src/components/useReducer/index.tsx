import React, { useReducer } from 'react';
const initialState = {
    count:0 
}
type CounterState={
    count:number
}
type UpdateAction={
    type:'up'|'down'
    payload:number
}
type ResetAction={
    type:'reset'
}
type CounterAction =  UpdateAction | ResetAction 
function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case 'up':
            return { count:state.count + action.payload};
        case 'down':
            return { count:state.count - action.payload};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
export const Counter = () => {
    const [state,dispatch]= useReducer(reducer,initialState);
    return (
        <div style={{padding:'0px 20px'}}>
            <h1>{state.count}</h1>
            <button onClick={()=> dispatch({type :'up',payload:1})}>UP</button>
            <button onClick={()=> dispatch({type:'reset'})}>RESET</button>
            <button onClick={()=> dispatch({type:'down',payload:1})}>DOWN</button>
        </div>
    );
};

