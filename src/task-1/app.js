// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="typing.d.ts" />
//без reference почему то не видит, что можно будет сделать, что тс увидел user (и линт придется отключить он просит заменить это импортом, 
//и пространсвтво имен тоже)
// eslint-disable-next-line @typescript-eslint/no-namespace
var Custom;
(function (Custom) {
    Custom.user.upAgeByYear();
    console.log(Custom.user);
    console.log(Custom.user.name);
    console.log(Custom.user.age);
})(Custom || (Custom = {}));
