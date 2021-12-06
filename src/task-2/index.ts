/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */

import {SettingValue} from "./SettingValue";
import {Setting} from "./Setting";
import {Example} from "./Example";

const example = new Example(new Setting('очень', new SettingValue('слож', 'но')));
example.id = 100
example.title = 'капец'
console.log(example.id)
console.log(example.title)