import { forwardRef } from "react";
import { CustomPIXIComponent } from "react-pixi-fiber";

export function connectPixiObject(PixiObject, hocFunction) {
    const PixiComponent = customPixiComponent(PixiObject);
    return connectPixiComponent(PixiComponent, hocFunction);
}

export function connectPixiComponent(PixiComponent, hocFunction) {
    if (typeof hocFunction === "function") {
        const ConnectedComponent = forwardRef((props, ref) => hocFunction(PixiComponent, props, ref))
        ConnectedComponent.displayName = String(PixiComponent);
        return ConnectedComponent;
    }
    else {
        return PixiComponent;
    }
}

export function customPixiComponent(PixiObject) {
    return CustomPIXIComponent({
        customDisplayObject: (props) => new PixiObject(props),
        customApplyProps: (instance, oldProps, newProps) => {
            if (typeof instance.onPropsUpdate === "function") {
                instance.onPropsUpdate(oldProps, newProps);
            }
        }
    }, PixiObject.name);
}

export default customPixiComponent;