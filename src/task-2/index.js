/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */
define(["require", "exports", "./SettingValue", "./Setting", "./Example"], function (require, exports, SettingValue_1, Setting_1, Example_1) {
    "use strict";
    exports.__esModule = true;
    var settingValue = new SettingValue_1.SettingValue("Михаил", "Кирилл");
    var setting = new Setting_1.Setting("Дарья", settingValue);
    var example = new Example_1.Example(setting);
    example.id = 46237642342;
    example.title = "Заголовок";
    console.log(example);
    console.log(example.id, example.title);
});
