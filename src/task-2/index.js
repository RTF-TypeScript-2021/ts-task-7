"use strict";
exports.__esModule = true;
/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */
var SettingValue_1 = require("./SettingValue");
var Setting_1 = require("./Setting");
var Example_1 = require("./Example");
var settingValue = new SettingValue_1.SettingValue("Андрей", "Александр");
var setting = new Setting_1.Setting("Алексей", settingValue);
var example = new Example_1.Example(setting);
example.id = 52363473085123;
example.title = "Заходят в бар Андрей, Алексей и Александр";
console.log(example);
console.log(example.id, example.title);
