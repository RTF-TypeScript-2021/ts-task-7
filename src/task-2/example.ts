
 import { Setting } from "./Setting";

class Example {
    public title: string;
    public id: number;
    private _setting: Setting;

    constructor(s: Setting) {
        this._setting = s;
    }
}
console.log("подгрузился экзампле");

export { Example }; 