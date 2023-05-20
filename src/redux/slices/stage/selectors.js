export function selectCounterValue(state) {
    return selectCounterSlice(state).value;
}

export function selectCounterSlice(state) {
    return selectStageSlice(state).counter;
}

export function selectStageSlice(state) {
    return state.stage;
}