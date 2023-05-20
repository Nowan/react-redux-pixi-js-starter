import { Component, forwardRef } from "react";
import { CustomPIXIComponent, applyDisplayObjectProps } from "react-pixi-fiber";

export function renderPixiClass(PixiClass, hocFunction) {
    const PixiComponent = customPixiComponent(PixiClass);
    return renderPixiComponent(PixiComponent, hocFunction);
}

export function renderPixiComponent(PixiComponent, hocFunction) {
    if (typeof hocFunction === "function") {
        const ConnectedComponent = forwardRef((props, ref) => hocFunction(PixiComponent, props, ref))
        ConnectedComponent.displayName = String(PixiComponent);
        return ConnectedComponent;
    }
    else {
        return PixiComponent;
    }
}

export function customPixiComponent(PixiClass) {
    return CustomPIXIComponent({
        customDisplayObject: (props) => new PixiClass(props),
        customApplyProps: (instance, oldProps, newProps) => {
            applyDisplayObjectProps(PixiClass.name, instance, oldProps, newProps);

            if (typeof instance.onPropsUpdate === "function") {
                instance.onPropsUpdate(oldProps, newProps);
            }
        }
    }, PixiClass.name);
}

export function adapterClass(PixiClass) {
    const PixiComponent = customPixiComponent(PixiClass);
    class PixiComponentAdapter extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <PixiComponent {...this.props} ref={this.props.innerRef} />;
        }
    }

    return PixiComponentAdapter;
}

export default customPixiComponent;