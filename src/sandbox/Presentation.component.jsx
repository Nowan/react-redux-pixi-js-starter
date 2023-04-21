import pixiFiber from "./decorators/pixiFiber";
import { forwardRef } from "react";
import { useCounter, useReduxCounter } from "../redux/hooks";
import PixiPresentation from "./Presentation.pixi";

export default pixiFiber(PixiPresentation, (Component, props, ref) => {
    const counter = useReduxCounter(0, 1000);

    return <Component ref={ref} {...props} counter={counter} />;
});