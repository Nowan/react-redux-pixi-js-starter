import { useEffect, useRef } from "react";
import { useStore } from "react-redux";
import Presentation from "./Presentation.component.class";
import { useApp, useReduxCounter } from "../redux/hooks";

export default function Sandbox() {
    const store = useStore();
    const app = useApp();
    const ref = useRef(null);
    const counter = useReduxCounter(0, 1000);

    useEffect(() => {
        const presentation = ref.current;
        console.log(presentation);
    }, []);

    return (
        <Presentation ref={ref} x={100} y={100} />
    );
}