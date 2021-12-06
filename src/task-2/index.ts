/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */

import {SettingValue} from "./SettingValue";
import {Example} from "./Example";
import {Setting} from "./Setting";

const sv = new SettingValue('хаха', 'хехе')
const s = new Setting('хихи', sv)
const e = new Example(s)
e.id = 228
console.log(e.id)
