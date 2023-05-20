import { forwardRef } from "react";
import { adapterClass } from "../../decorators/pixiFiber"
import Presentation from "./Presentation.pixi";
import { connect } from "react-redux";
// import { selectCount } from "../../../features/counter/counterSlice";

// @connect((state) => ({ counter: selectCount(state) }))
class PresentationAdapter extends adapterClass(Presentation) {

}

export default forwardRef((props, ref) => <PresentationAdapter {...props} innerRef={ref} />);