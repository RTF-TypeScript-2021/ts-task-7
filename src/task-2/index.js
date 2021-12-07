/** Задача 2
 * Необходимо реализовать асинхронную подгруздку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам.
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 *      все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */
define(["require", "exports", "./Example", "./Setting", "./SettingValue"], function (require, exports, Example_1, Setting_1, SettingValue_1) {
    "use strict";
    exports.__esModule = true;
    var sv = new SettingValue_1.SettingValue("a", "b");
    var setting = new Setting_1.Setting("Hello, world!", sv);
    var example = new Example_1.Example(setting);
    console.log(example);
});
