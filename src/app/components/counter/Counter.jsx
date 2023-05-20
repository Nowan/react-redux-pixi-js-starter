import { Component } from "react";
import { Text } from "react-pixi-fiber";
import { connect } from "react-redux";
import { selectCounterValue } from "../../../redux/slices/stage/selectors";

const connectWrapper = connect(state => ({
    value: selectCounterValue(state)
}));

class Counter extends Component {
    render() {
        return <Text {...this.props} text={this.props.value} style={{ fill: 0xffffff }} anchor={0.5} />
    }
}

export default connectWrapper(Counter)