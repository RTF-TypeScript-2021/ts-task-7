import {SettingValue} from "./SettingValue";

export class Setting {
    public key: string;
    public value: SettingValue;

    constructor(k: string, ov: SettingValue) {
        this.key = k;
        this.value = ov;
    }
}
