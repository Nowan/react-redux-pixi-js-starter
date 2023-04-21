import { useEffect, useRef } from "react";
import { useStore } from "react-redux";
import Presentation from "./Presentation.component";
import { useApp, useReduxCounter } from "../redux/hooks";

export default function Sandbox() {
    const store = useStore();
    const app = useApp();
    const ref = useRef(null);

    useEffect(() => {
        const presentation = ref.current;
        console.log(presentation)
    }, []);

    return (
        <Presentation ref={ref} />
    );
}