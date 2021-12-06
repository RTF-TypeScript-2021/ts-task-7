export class Example {
    public title: string;
    public id: number;
    private _setting: Setting;

    constructor(s: Setting) {
        this._setting = s;
    }
}

import { Setting } from "./setting";
import { SettingValue } from "./settingValue";

