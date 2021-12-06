/** Задача 2
 * Необходимо реализовать асинхронную подгруздку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам.
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 *      все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */

import {Example} from "./Example";
import {Setting} from "./Setting";
import {SettingValue} from "./SettingValue";

const sv = new SettingValue("a", "b");
const setting = new Setting("Hello, world!", sv);
const example = new Example(setting);

console.log(example);

