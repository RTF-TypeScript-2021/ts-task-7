import { Setting } from "./setting";
import { SettingValue } from "./settingValue";

export class Example {
    public title: string;
    public id: number;
    private _setting: Setting;

    constructor(s: Setting) {
        this._setting = s;
        console.log("I'm do it!")
    }
}(Setting)
 const t  = new Example(new Setting("m", new SettingValue("h", "a")));
 console.log(t)
