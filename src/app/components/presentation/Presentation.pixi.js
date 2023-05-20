import { Container, Text } from "pixi.js";

export default class Presentation extends Container {
    constructor() {
        super();

        this._label = this.addChild(new Text());
    }
}
