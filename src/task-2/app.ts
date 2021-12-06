//не понимаю в чем проблема, при использовании ./lib браузер запрашивает файл lib.js,
//а не файлы, которые в нем экспортируются
import * as SE from './lib/index'

const settingVal = new SE.SettingValue("100px","200px");
const settings = new SE.Setting("key", settingVal);
console.log(settings.value.property1);