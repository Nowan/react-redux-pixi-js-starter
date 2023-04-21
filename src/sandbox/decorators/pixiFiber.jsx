import { forwardRef } from "react";
import { CustomPIXIComponent } from "react-pixi-fiber";

export function fiber(target) {
    console.log(target);
}

export function pixiFiber(PixiObject, wrapper) {
    const CustomComponent = CustomPIXIComponent({
        customDisplayObject: (props) => new PixiObject(props),
        customApplyProps: (instance, oldProps, newProps) => {
            if (typeof instance.onPropsUpdate === "function") {
                instance.onPropsUpdate(oldProps, newProps);
            }
        }
    }, PixiObject.name);

    return forwardRef((props, ref) => {
        if (wrapper) {
            return wrapper(CustomComponent, props, ref)
        }
        else {
            return <CustomComponent {...props} ref={ref} />;
        }
    });
}

export default pixiFiber;