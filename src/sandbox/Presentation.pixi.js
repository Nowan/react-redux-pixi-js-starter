import { Container, Text } from "pixi.js";
import { fiber } from "./decorators/pixiFiber";

export default @fiber class PixiPresentation extends Container {
    constructor(props) {
        super();

        this._label = this.addChild(new Text(props.counter));
    }

    onPropsUpdate(oldProps, newProps) {
        if (!oldProps || !newProps) return;

        if (oldProps.counter !== newProps.counter) {
            this._label.text = newProps.counter || "0";
        }
    }
}
