import { connectPixiObject } from "./decorators/customPixiComponent";
import Presentation from "./Presentation.pixi";
import { useSelector } from "react-redux";

export default connectPixiObject(Presentation, (Presentation, props, ref) => {
    const value = useSelector(state => state.counter.value);

    return <Presentation {...props} ref={ref} counter={value} />
});