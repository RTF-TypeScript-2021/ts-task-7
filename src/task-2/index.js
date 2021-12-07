"use strict";
exports.__esModule = true;
/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */
var Example_1 = require("./Example");
var Setting_1 = require("./Setting");
var SettingValue_1 = require("./SettingValue");
console.log(new Example_1.Example(new Setting_1.Setting("string", new SettingValue_1.SettingValue("p1", "p2"))));
