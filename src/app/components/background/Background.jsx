import { Component, createRef } from "react";
import { Graphics } from "react-pixi-fiber";

export default class Background extends Component {
    constructor() {
        super();

        this._graphicsRef = createRef(null);
    }

    componentDidMount() {
        this._graphicsRef.current?.beginFill(0x000000).drawRect(0, 0, this.props.width, this.props.height).endFill()
    }

    render() {
        return <Graphics ref={this._graphicsRef} />;
    }
}