import { useStore } from "react-redux";
import { Container, usePixiApp } from "react-pixi-fiber";
import Background from "../background/Background";
import Counter from "../counter/Counter";

export default function Sandbox() {
    const store = useStore();
    const app = usePixiApp();

    return (
        <Container>
            <Background width={app.renderer.width} height={app.renderer.height} />
            <Counter x={app.renderer.width * 0.5} y={app.renderer.height * 0.5} value={0}/>
        </Container>
    );
}