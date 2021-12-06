import * as SE from './lib'
import { Setting } from './lib';

const settingVal = new SE.SettingValue("100px","200px");
const settings = new SE.Setting("key", settingVal);
console.log(settings.value.property1);