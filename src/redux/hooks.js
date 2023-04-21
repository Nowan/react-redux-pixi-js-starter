import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "react-pixi-fiber";
import { increment } from '../features/counter/counterSlice';

export function useApp() {
    return useContext(AppContext);
}

export function useCounter(initialValue, frequencyInMs) {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => setCounter(counter => counter + 1), frequencyInMs);
        return () => clearInterval(interval);
    }, []);

    return counter;
}

export function useReduxCounter(initialValue, frequencyInMs) {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => dispatch(increment()), frequencyInMs);
        return () => clearInterval(interval);
    }, []);

    return counter;
}