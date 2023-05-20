import { Component } from "react";
import { Text } from "react-pixi-fiber";

export default class Counter extends Component {
    render() {
        return <Text text={this.props.counter} />
    }
}