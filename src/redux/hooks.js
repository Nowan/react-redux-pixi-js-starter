import { useEffect, useState } from "react";

export function useCounter(initialValue, frequencyInMs) {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => setCounter(counter => counter + 1), frequencyInMs);
        return () => clearInterval(interval);
    }, []);

    return counter;
}