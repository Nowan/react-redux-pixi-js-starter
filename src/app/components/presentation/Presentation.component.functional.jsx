
import Presentation from "./Presentation.pixi";
import { useSelector } from "react-redux";
// import { selectCount } from "../features/counter/counterSlice";
import { renderPixiClass } from "../../decorators/pixiFiber";

export default renderPixiClass(Presentation, (Component, props, ref) => {
    // const value = useSelector(selectCount);
    
    return <Component {...props} ref={ref} counter={0} />
});