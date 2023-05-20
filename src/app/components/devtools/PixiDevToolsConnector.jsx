import { useContext, useEffect } from "react";
import { AppContext } from "react-pixi-fiber";

export default function PixiDevToolsConnector(props) {
    const app = props.app || useContext(AppContext);

    useEffect(() => connectPixiDevTools(app), []);

    return null;
}

function connectPixiDevTools(app) {
    window.__PIXI_APP__ = app;
}