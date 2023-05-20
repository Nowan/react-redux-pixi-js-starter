export function actionCreator(actionType) {
    return overrideToString(() => ({ type: actionType }), actionType);
}

export function payloadActionCreator(actionType, payloadCreator = defaultPayloadCreator) {
    return overrideToString((...args) => ({ type: actionType, payload: payloadCreator(...args)}), actionType);
}

function overrideToString(actionCreator, actionType) {
    actionCreator.toString = () => actionType;
    return actionCreator;
}

function defaultPayloadCreator(arg0) {
    return arg0;
}