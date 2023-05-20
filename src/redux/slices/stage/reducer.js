import initialState from "./state";
import { setCounterValue } from "./actions";

export default function stageReducer(state = initialState, action) {
    switch(action.type) {
        case `${setCounterValue}`: 
            return { ...state, counter: { ...state.counter, value: action.payload }};
        default:
            return state;
    }
}